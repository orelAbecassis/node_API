// ----------------------------------------------
// Fonction pour récupérer tous les produits
// ----------------------------------------------

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

// ----------------------------------------------
// Fonction pour récupérer un produit par son ID
// ----------------------------------------------

getProduitId = (request, response) => {
    ProduitModel.getProduitId(request.params.id, (error, data) => {
        if (error) {
            if (error.kind === "index_not_found") {
                response.status(404).send({
                    message: `L'id ${request.params.id} de la table produit n'a pas été trouvé.`
                });
            } else {
                response.status(500).send({
                    message: `Une erreur est survenue lors de la récupération du produit avec l'id ${request.params.id}.`
                });
            }
        } else {
            response.send(data);
        }
    });
};

// ----------------------------------------------
// Fonction pour créer un nouveau produit
// ----------------------------------------------

const createProduit = (req, res) => {
    const nouveauProduit = {
        nom_produit: req.body.nom_produit,
        prix: req.body.prix,
        legende: req.body.legende,
        image: req.body.image,
        nom_categ: req.body.nom_categ
    };

    ProduitModel.createProduit(nouveauProduit, (error, produitId) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la création du produit."
            });
        } else {
            res.send({ id: produitId, ...nouveauProduit });
        }
    });
};

// ----------------------------------------------
// Fonction pour mettre à jour un produit par son ID
// ----------------------------------------------

updateProduitId = (req, res) => {
    const produitId = req.params.id;
    const nouveauProduit = {
        nom: req.body.nom,
        prix: req.body.prix,
        legende: req.body.legende,
        image: req.body.image,
        id_categ: req.body.id_categ
    };

    ProduitModel.updateProduitId(produitId, nouveauProduit, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la mise à jour du produit."
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ id: produitId, ...nouveauProduit });
            } else {
                res.status(404).send({
                    message: "Produit non trouvé."
                });
            }
        }
    });
};

// ----------------------------------------------
// Fonction pour supprimer un produit par son ID
// ----------------------------------------------

const deleteProduitId = (req, res) => {
    const produitId = req.params.id;

    ProduitModel.deleteProduitId(produitId, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la suppression du produit."
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

// ----------------------------------------------
// Export des fonctions du contrôleur
// ----------------------------------------------



module.exports = {
    getAllProduits,
    getProduitId,
    createProduit,
    updateProduitId,
    deleteProduitId,

}
