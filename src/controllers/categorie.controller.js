// ----------------------------------------------
// Instance et appele du model pour chaque fonction
// ----------------------------------------------
const categorieModel = require('../models/categorie.model');


// ----------------------------------------------
// Fonction pour récupérer toutes les catégories
// ----------------------------------------------
const getAllCategories = (req, res) => {
    categorieModel.getAllCategories((error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue en essayant de récupérer les autheurs"
            });
        } else {
            res.send(data);
        }
    });
};
// ----------------------------------------------
// Fonction pour récupérer une catégorie par ID
// ----------------------------------------------

const getCategorieById = (req, res) => {
    const categorieId = req.params.id;

    categorieModel.getCategorieById(categorieId, (error, categorie) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue en essayant de récupérer l'autheur"
            });
        } else {
            if (categorie) {
                res.send(categorie);
            } else {
                res.status(404).send({
                    message: "autheur non trouvé"
                });
            }
        }
    });
};
// ----------------------------------------------
// Fonction pour mettre à jour une catégorie
// ----------------------------------------------


const updateCategorie = (req, res) => {
    const categorieId = req.params.id;
    const nouveauCategorie = {
        nom_categ: req.body.nom_categ
    };

    categorieModel.updateCategorie(categorieId, nouveauCategorie, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la mise à jour de l'autheur"
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ id: categorieId, ...nouveauCategorie });
            } else {
                res.status(404).send({
                    message: "Autheur non trouvé"
                });
            }
        }
    });
};
// ----------------------------------------------
// Fonction pour créer une nouvelle catégorie
// ----------------------------------------------


const createCategorie = (req, res) => {
    const nouveauCategorie = {
        nom_categ: req.body.nom_categ
    };
    categorieModel.createCategorie(nouveauCategorie, (error, categorieId) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la création de l'autheur"
            });
        } else {
            res.send({ id: categorieId, ...nouveauCategorie });
        }
    });
};
// ----------------------------------------------
// Fonction pour supprimer une catégorie
// ----------------------------------------------

const deleteCategorie = (req, res) => {
    const categorieId = req.params.id;

    categorieModel.deleteCategorie(categorieId, (error, rowsAffected) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la suppression de l'autheur"
            });
        } else {
            if (rowsAffected > 0) {
                res.send({ message: "Autheur supprimé avec succès" });
            } else {
                res.status(404).send({
                    message: "Autheur non trouvé"
                });
            }
        }
    });
};
// ----------------------------------------------
// Exportation des fonctions du contrôleur de categorie
// ----------------------------------------------

module.exports = {
    getAllCategories,  // Fonction pour obtenir tous les categories
    getCategorieById, // Fonction pour obtenir un categorie par son identifiant
    updateCategorie, // Fonction pour créer un categories
    createCategorie, // Fonction pour mettre à jour un categoris par son identifiant
    deleteCategorie // Fonction pour supprimer un categorie par son id
};
