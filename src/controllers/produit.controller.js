
const ProduitModel = require('../models/produit.model');

getAllProduits = (request, response) => {
    ProduitModel.getAllProduits((error, data) => {
        if (error)
            response.status(500).send({
                message:
                    error.message || "Une erreur est survenue en essayant de récupérer la table produit."
            });
        else {

            response.send(data);
        }
    });
};


getProduitId = (request, response) => {
    ProduitModel.getProduitId(request.params.id, (error, data) => {
        if (error) {
            if (error.kind === "index_not_found") {
                response.status(404).send({
                    message: `L'id ${request.params.id} de la table produit n'a pas était trouvé.`
                });
            } else {
                response.status(500).send({
                    message: `L'id ${request.params.id} de la table produit n'a pas était trouvé.`
                });
            }
        } else {

            response.send(data);
        }
    });
};


// getProduitName = (request, response) => {
//     ProduitModel.getProduitName(request.params.nom, (error, data) => {
//         if (error) {
//             if (error.kind === "name_not_found") {
//                 response.status(404).send({
//                     message: `${request.params.nom} n'a pas était trouvé. Les espaces sont possibles et une majuscule à chaque mot est nécéssaire ! exemple : */filter/One Piece`
//                 });
//             } else {
//                 response.status(500).send({
//                     message: `${request.params.nom} n'a pas était trouvé. Les espaces sont possibles et une majuscule à chaque mot est nécéssaire ! exemple : */filter/One Piece`
//                 });
//             }
//         } else {
//             data = utils.removeMultipleIdenticalObject(data);
//             data = utils.specifyPath(data);
//             response.send(data);
//         }
//     });
// };
//


const createProduit = (req, res) => {
    const nouveauProduit = {
        nom_produit: req.body.nom_produit,
        prix: req.body.prix,
        legende: req.body.legende,
        image: req.body.image,
        nom_categ : req.body.nom_categ
    };

    ProduitModel.createProduit(nouveauProduit, (error, produitId) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la création du livre"
            });
        } else {
            res.send({ id: produitId, ...nouveauProduit });
        }
    });
};


updateProduitId = (req, res) => {
    const produitId = req.params.id;
    const nouveauProduit = {
        nom: req.body.nom,
        prix: req.body.prix,
        legende: req.body.legende,
        image: req.body.image,
        id_categ : req.body.id_categ
    };

    ProduitModel.updateProduitId(produitId, nouveauProduit, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la mise à jour du produit"
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ id: produitId, ...nouveauProduit });
            } else {
                res.status(404).send({
                    message: "Livre non trouvé"
                });
            }
        }
    });
};

 const deleteProduitId = (req, res) => {
    const produitId = req.params.id;

     ProduitModel.deleteProduitId(produitId, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la suppression du produit"
            });
        } else {
            if (rowsAffected >= 0) {
                res.send({ message: "Produit supprimé avec succès" });
            } else {
                res.status(404).send({
                    message: "Produit non trouvé "
                });
            }
        }
    });
};




module.exports = {
    getAllProduits,
    getProduitId,
    createProduit,
    updateProduitId,
    deleteProduitId,

}
