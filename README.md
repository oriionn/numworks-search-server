# Numworks Search Server
C'est une simple API qui permet de chercher des scripts Numworks en utiliser une recherche spécifique sur Google en utilisant l'API Custom Search de Google.

## Installation
1. Clonez le repo
```bash
git clone https://github.com/oriionn/numworks-search-server.git
```

2. Allez dans le dossier
```bash
cd numworks-search-server
```

3. Installez les dépendances
```bash
npm install
```

4. Activer l'API Custom Search de Google et récupérez votre clé API et votre ID de recherche.
[Allez dans votre console développeur Google](https://console.cloud.google.com/apis/api/customsearch.googleapis.com)

5. Créez votre Custom Search Engine sur le site de Google qui recherche spécifiquement sur `*.numworks.com/python/*`.
[Ici](https://programmablesearchengine.google.com/controlpanel/create)
![create_cse.png](docs/create_cse.png)

6. Copiez le fichier `.env.example` en `.env` et remplissez les champs
```bash
cp .env.example .env
```

7. Lancez le serveur
```bash
npm start
```

## Utilisation
Pour rechercher des scripts, il suffit d'envoyer une requête GET à l'URL `/` avec le paramètre `q` qui contient la recherche.
Exemple: `http://localhost:3000/?q=démineur`

## Contributeurs
![Contributors](https://contrib.rocks/image?repo=oriionn/numworks-search-server)

## License
Ce projet est disponible sous la license MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.