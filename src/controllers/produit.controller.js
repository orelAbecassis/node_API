// const produitModel = require('../models/produit.model');
//
// const getAllProduits = (req, res) => {
//     produitModel.getAllProduits((error, data) => {
//         if (error) {
//             res.status(500).send({
//                 message: error.message || "Une erreur est survenue en essayant de récupérer les produits"
//             });
//         } else {
//             res.send(data);
//         }
//     });
// };
//
// module.exports = {
//     getAllProduits
// };




const Thing = require('../models/produit.model');

exports.createThing = (req, res, next) => {
    const thing = new Thing({
        titre: req.body.titre,
        nom_produit: req.body.nom_produit,
        prix:req.body.prix,
        legende: req.body.legende,
        image: req.body.image,
        // userId: req.body.userId
    });
    thing.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

module.exports = {
    createThing
};