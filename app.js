const axios = require('axios');
require('dotenv').config();

const fastify = require('fastify')({
  logger: process.argv[2] === 'dev',
});

fastify.get('/', async ( request, reply) => {
  const query = request.query.q;
  if (!query) return reply.status(404).send({error: 'No query provided.'});


  const searchQ = `
    site:my.numworks.com/python/
    intitle:"— Python"
    -intitle:"Scripts by" 
    -intitle:"Public library"
    ${query}
  `;
  const res = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.KEY}&cx=${process.env.CX}&q=${searchQ}&num=10`);
  if (!res.data) return reply.status(404).send({error: 'No results found.'});

  let results = res.data.items;
  results = results.map((result) => [
    result.title.split('—')[0],
    result.link,
    result.link.split('/')[result.link.split('/').length - 2],
  ]);
  const resultsData = [];
  for (const result of results) {
    const re = {
      name: result[0],
      link: result[1],
      author: result[2],
    };
    resultsData.push(re);
  }

  reply.send(resultsData);
});

fastify.listen({
  port: 3000,
  host: '0.0.0.0',
}, (err, address) => {
  if (err) throw err;
  console.log('Server listening on port 3000');
});
