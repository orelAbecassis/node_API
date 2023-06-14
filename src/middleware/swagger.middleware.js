// ----------------------------------------------
// Importation de la lib pour générer le json swagger
// ----------------------------------------------
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");



// ----------------------------------------------
// Définition de l'architecture de base de la documentation
// ----------------------------------------------
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Les Délices de Tata",
            version: "0.1.0",
            description: "Documentation node js",

        },
        servers: [
            {
                url: "http://localhost:8081/api/v1",
            },
        ],
        components: {
            schemas: {
                Produit: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                        },
                        nom: {
                            type: "string",
                        },
                        prix: {
                            type: "integer",
                        },
                        legende: {
                            type: "string" ,
                        },
                        image: {
                            type: "string" ,
                        },
                        id_categ: {
                            type: "integer" ,
                        },
                    },
                },
                ProduitInput: {
                    type: "object",
                    properties: {
                        nom: {
                            type: "string",
                        },
                        prix: {
                            type: "integer",
                        },
                        legende: {
                            type: "string" ,
                        },
                        image: {
                            type: "string" ,
                        },
                        id_categ: {
                            type: "integer" ,
                        },
                    },
                    required: ["nom", "prix", "legende","image","id_categ"], // Indiquez les propriétés requises
                },
                Categorie: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                        },
                        nom_categ: {
                            type: "string",
                        },
                    },
                },
                CategorieInput: {
                    type: "object",
                    properties: {
                        nom_categ: {
                            type: "string",
                        },
                    },
                    required: ["nom_categ"], // Indiquez les propriétés requises
                },
            },
        },
        tags: [
            // Ajoutez les tags ici
            {
                name: "Produit",
               description: "Opérations liées aux produits"
            },
            {
                name: "Categorie", // Nom du tag pour les auteurs
                description: "Opérations liées aux catégories",
            },
        ],
    },
    apis: ["./routes/*.js"],
};


// ----------------------------------------------
// Permet de trier dans la documentation par type de requette HTTP
// ----------------------------------------------
const specs = swaggerJsdoc(options);

const serveSwagger = swaggerUi.serve;
const setupSwagger = swaggerUi.setup(specs);

module.exports = { serveSwagger,setupSwagger};
