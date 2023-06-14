# Application de gestion de produits

Cette application est développée avec Node.js et Express.js et permet de gérer des produits et des catégories. Elle offre une API permettant de récupérer, créer, mettre à jour et supprimer des produits et des catégories.

## Architecture MVC

Cette application suit une architecture MVC (Modèle-Vue-Contrôleur) pour organiser le code de manière structurée et maintenable.

- Les **modèles** représentent les entités de données de l'application, comme les produits et les catégories. Ils sont définis dans le répertoire `models` et sont responsables de l'interaction avec la base de données.

- Les **routes** définissent les endpoints de l'API et déterminent comment les requêtes HTTP sont gérées. Les fichiers de route se trouvent dans le répertoire `routes`.

- Les **contrôleurs** contiennent la logique métier de l'application. Ils traitent les requêtes HTTP en utilisant les modèles appropriés et retournent les réponses aux clients. Les contrôleurs sont implémentés dans le répertoire `controllers`.

## Structure du code

- Le fichier principal de l'application est `server.js`, où le serveur Express est configuré et les routes sont définies.

- Les routes sont séparées en modules distincts, tels que `produit.route.js` et `categorie.route.js`, pour maintenir un code modulaire et évolutif.

- Les modèles, les contrôleurs et les fichiers de route sont regroupés dans des dossiers respectifs pour une meilleure organisation.

## Documentation de l'API

La documentation de l'API est générée automatiquement à l'aide de Swagger. Vous pouvez accéder à la documentation à l'adresse `http://localhost:8081/api/v1/docs` une fois l'application lancée. Cela vous permettra de visualiser les endpoints disponibles, leurs paramètres, ainsi que les exemples de requêtes et de réponses.

## Configuration

Avant de lancer l'application, assurez-vous de configurer les variables d'environnement. Vous pouvez utiliser le fichier `.env` pour définir ces variables.

Exemple de contenu du fichier `.env` :
Configuration de la base de donnée
HOST=127.0.0.1 # De base le port 3306 est préciser
DB_USER=root
DB_PASS=
DB_DATABASE=blog1

# Runtime local
PORT=8081


## Installation

1. Clonez ce dépôt de code sur votre machine locale.
2. Installez les dépendances en exécutant la commande suivante :

npm install
##Utilisation
1. Lancez l'application en exécutant la commande suivante :
npm start

2. L'application sera accessible à l'adresse http://localhost:8081.

##Documentation de l'API
La documentation de l'API est générée à l'aide de Swagger et est accessible à l'adresse http://localhost:8081/api/v1/docs. Vous y trouverez les endpoints disponibles ainsi que des exemples de requêtes.

##Endpoints
GET /api/v1/produits : Récupérer tous les produits.
GET /api/v1/produits/{id} : Récupérer un produit par ID.
POST /api/v1/produits : Créer un nouveau produit.
PUT /api/v1/produits/{id} : Mettre à jour un produit par ID.
DELETE /api/v1/produits/{id} : Supprimer un produit par ID.
GET /api/v1/categories : Récupérer toutes les catégories.
GET /api/v1/categories/{id} : Récupérer une catégorie par ID.
POST /api/v1/categories : Créer une nouvelle catégorie.
PUT /api/v1/categories/{id} : Mettre à jour une catégorie par ID.
DELETE /api/v1/categories/{id} : Supprimer une catégorie par ID.

##Contribuer
Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, n'hésitez pas à ouvrir une issue ou à envoyer une demande de fusion (pull request).



