// const CategorieModel = require('../models/categorie.model');
//
//  getAllCategories = (request, response) => {
//     CategorieModel.getAllCategories((error, data) => {
//         if (error){
//             response.status(500).send({
//                 message:
//                     error.message || "Une erreur est survenue en essayant de récupérer la table categorie."
//             });
//         } else {
//
//             response.send(data);
//         }
//     });
// };
//
//
// getCategorieId = (request, response) => {
//     CategorieModel.getCategorieId(request.params.id, (error, data) => {
//         if (error) {
//             if (error.kind === "index_not_found") {
//                 response.status(404).send({
//                     message: `L'id ${request.params.id} de la table categorie n'a pas était trouvé.`
//                 });
//             } else {
//                 response.status(500).send({
//                     message: `L'id ${request.params.id} de la table categorie n'a pas était trouvé.`
//                 });
//             }
//         } else {
//
//             response.send(data);
//         }
//     });
// };
//
//
//  updateCategorieId = (req, res) => {
//     const categorieId = req.params.id;
//     const nouveauCategorie = {
//         nom_categ: req.body.nom_categ,
//
//     };
//
//     CategorieModel.updateCategorieId(categorieId, nouveauCategorie, (error, rowsAffected) => {
//         if (error) {
//             res.status(500).send({
//                 message: error.message || "Une erreur est survenue lors de la mise à jour la categorie"
//             });
//         } else {
//             if (rowsAffected > 0) {
//                 res.send({ id: produitId, ...nouveauProduit });
//             } else {
//                 res.status(404).send({
//                     message: "categorie non trouvé"
//                 });
//             }
//         }
//     });
// };
//
//
//  createCategorie = (req, res) => {
//     const nouveauCategorie = {
//         nom_categ : req.body.nom_categ
//     };
//
//     CategorieModel.createCategorie(nouveauCategorie, (error, categorieId) => {
//         if (error) {
//             res.status(500).send({
//                 message: error.message || "Une erreur est survenue lors de la création du livre"
//             });
//         } else {
//             res.send({ id: categorieId, ...nouveauCategorie });
//         }
//     });
// };
//
//
// module.exports = {
//     getAllCategories,
//     getCategorieId,
//     updateCategorieId,
//     createCategorie
// }

const categorieModel = require('../models/categorie.model');

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
module.exports = {
    getAllCategories,
    getCategorieById,
    updateCategorie,
    createCategorie,
    deleteCategorie
};