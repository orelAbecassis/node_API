// ----------------------------------------------
// Importation de la connexion à la bdd
// ----------------------------------------------
const dataBase = require('../db/db-connect');
// const {deleteProduitById} = require("../routes/produits");


// ----------------------------------------------
// Création d'un constructeur pour la création et la mise à jour des enregistrements
// ----------------------------------------------
const CategorieConstructor = function (categorie) {
    this.nom_categ = categorie.nom_categ;
};

// ----------------------------------------------
// Récupérer l'ensemble des catégories
// ----------------------------------------------
getAllCategories = result_bdd_request => {
    dataBase.query("SELECT * FROM categories", (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        // Le premier null représente les erreurs
        result_bdd_request(null, response);
    });
};



// ----------------------------------------------
// Mettre à jour une catégorie par son ID
// ----------------------------------------------
// const updateCategorieId = (Id_categ, updatedData, result_bdd_request) => {
//     const query = `UPDATE categories
//                    SET nom_categ = ?
//                    WHERE id_categ = ?`;
//
//     dataBase.query(query, [updatedData, Id_categ], (error, response) => {
//         if (error) {
//             result_bdd_request(error);
//         } else if (response.affectedRows === 0) {
//             result_bdd_request({ kind: "id_not_found" });
//         } else {
//             result_bdd_request(null, response);
//         }
//     });
// };




const getCategorieId = (Id_categ, result_bdd_request) => {
    const query = `SELECT * from categories WHERE id_categ = ?`;

    dataBase.query(query, [Id_categ], (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else if (response.affectedRows === 0) {
            result_bdd_request({ kind: "id_not_found" });
        } else {
            result_bdd_request(null, response);
        }
    });
};

// ----------------------------------------------
// Créer un nouvel enregistrement en BDD
// ----------------------------------------------
// const createCategorie = (nom_categ, result_bdd_request) => {
//     const query = `INSERT INTO produits ( nom_categ)
//                    SELECT ?, id_categ
//                    FROM categories
//                    WHERE nom_categ = ?`;
//
//     dataBase.query(query, [ nom_categ], (error, response) => {
//         if (error) {
//             result_bdd_request(error);
//         } else {
//             result_bdd_request(null, response);
//         }
//     });
// };

module.exports = {
    CategorieConstructor,
    getAllCategories,
    // updateCategorieId,
    getCategorieId,
    // createCategorie,
};
