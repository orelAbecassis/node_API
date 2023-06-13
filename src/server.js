
const dotenv = require('dotenv');
const express = require('express');

const produitRoute = require('./routes/produits');
const categorieRoute = require('./routes/categories');


// server.use('/api/v1/docs',docRoute);
dotenv.config();

const server = express();
server.use(express.json());
server.set('json spaces', 2);

server.use('/api/v1/produits', produitRoute);
server.use('/api/v1/categories', categorieRoute);

server.get('/', (req, res) => {
    res.send('Hello, World!');
});

server.get('/api/v1/produits/:id', (req, res) => {
    const ProduitId = req.params.id;

    ProduitModel.getProduitId(ProduitId, (error, produit) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue en essayant de récupérer le produit"
            });
        } else {
            if (produit) {
                res.send(produit);
            } else {
                res.status(404).send({
                    message: "produit non trouvé"
                });
            }
        }
    });
});



server.put('/api/v1/produits/:id', (req, res) => {
    const ProduitId = req.params.id;
    const nouveauProduit = {
        nom: req.body.nom,
        prix: req.body.prix,
        legende: req.body.legende,
        image: req.body.image,
        id_categ : req.body.id_categ
    };

    produitRoute.updateProduitId(ProduitId, nouveauProduit, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la mise à jour du produit"
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ id: ProduitId, ...nouveauProduit });
            } else {
                res.status(404).send({
                    message: "Produit non trouvé"
                });
            }
        }
    });
});


server.delete('/api/v1/produits/:id', (req, res) => {
    const ProduitId = req.params.id;

    produitRoute.deleteProduitId(ProduitId, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la suppression du produit"
            });
        } else {
            if (rowsAffected > 0) {
                res.send({
                    message: "Produit supprimé avec succès"
                });
            } else {
                res.status(404).send({
                    message: "Produit non trouvé test"
                });
            }
        }
    });
});


server.post('/api/v1/produits', (req, res) => {
    const nouveauProduit = {
        nom_produit: req.body.nom_produit,
        prix: req.body.prix,
        legende: req.body.legende,
        image: req.body.image,
        nom_categ : req.body.nom_categ
    };
    produitRoute.createProduit(nouveauProduit, (error, produitId) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la création du livre"
            });
        } else {
            res.send({ id: produitId, ...nouveauProduit });
        }
    });
});


// ----------------------------------------------
// Categorie
// ----------------------------------------------

// server.get('/api/v1/categories/:id', (req, res) => {
//     const categorieId = req.params.id;
//
//    categorieRoute.getCategorieId(categorieId, (error, categorie) => {
//         if (error) {
//             res.status(500).send({
//                 message: error.message || "Une erreur est survenue en essayant de récupérer la categorie"
//             });
//         } else {
//             if (categorie) {
//                 res.send(categorie);
//             } else {
//                 res.status(404).send({
//                     message: "categorie non trouvé"
//                 });
//             }
//         }
//     });
// });


// server.put('/api/v1/categories/:id', (req, res) => {
//     const CategorieId = req.params.id;
//     const nouveauCateg = {
//         nom_categ: req.body.nom_categ,
//
//     };
//
//     categorieRoute.updateCategorieId(CategorieId, nouveauCateg, (error, rowsAffected) => {
//         if (error) {
//             res.status(500).send({
//                 message: error.message || "Une erreur est survenue lors de la mise à jour du categorie"
//             });
//         } else {
//             if (rowsAffected > 0) {
//                 res.send({ id: CategorieId, ...nouveauCateg });
//             } else {
//                 res.status(404).send({
//                     message: "Categorie non trouvé"
//                 });
//             }
//         }
//     });
// });



const port = Number(process.env.PORT || 8081);
server.listen(port, () => {
    console.log(`Your port is ${port}`);
});

module.exports=server;