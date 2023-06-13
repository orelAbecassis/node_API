// // ----------------------------------------------
// // Importation de la connexion à la bdd
// // ----------------------------------------------
// const dataBase = require('../db/db-connect');
//
//
// // ----------------------------------------------
// // Création d'un constructeur pour la création et la mise à jour des enregistrements
// // ----------------------------------------------
// const CategorieConstructor = function (categorie) {
//     this.nom_categ = categorie.nom_categ;
// };
//
// // ----------------------------------------------
// // Récupérer l'ensemble des catégories
// // ----------------------------------------------
// getAllCategories = result_bdd_request => {
//     dataBase.query("SELECT * FROM categories", (error, response) => {
//         if (error) {
//             result_bdd_request(error);
//         }
//         // Le premier null représente les erreurs
//         result_bdd_request(null, response);
//     });
// };
//
// // ----------------------------------------------
// // Mettre à jour une catégorie par son ID
// // ----------------------------------------------
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
//
//
//
//
// const getCategorieId = (Id_categ, result_bdd_request) => {
//     const query = `SELECT * from categories WHERE id_categ = ?`;
//
//     dataBase.query(query, [Id_categ], (error, response) => {
//         if (error) {
//             result_bdd_request(error);
//         } else if (response.affectedRows === 0) {
//             result_bdd_request({ kind: "id_not_found" });
//         } else {
//             result_bdd_request(null, response);
//         }
//     });
// };
//
// // ----------------------------------------------
// // Créer un nouvel enregistrement en BDD
// // ----------------------------------------------
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
//
// module.exports = {
//     CategorieConstructor,
//     getAllCategories,
//     updateCategorieId,
//     getCategorieId,
//     createCategorie,
// };



const dataBase = require('../db/db-connect');

const CategorieConstructor = function (categorie){
    this.id_categ = categorie.id_categ;
    this.nom_categ = categorie.nom_categ;

};

getAllCategories = result_bdd_request =>{
    dataBase.query("SELECT * FROM categories", (error, response)=>{
        if(error){
            result_bdd_request(error)
        }
        result_bdd_request(null, response);
    });
};


getCategorieById = (id, result_bdd_request) => {
    dataBase.query("SELECT * FROM categories WHERE id_categ = ?", id, (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response);
        }
    });
};
updateCategorie = (id, categorie, result_bdd_request) => {
    const { nom_categ } = categorie;
    const query = "UPDATE categories SET nom_categ = ? WHERE id_categ = ?";
    dataBase.query(query, [nom_categ, id], (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.affectedRows);
        }
    });
};
createCategorie = (nouveauCategorie, result_bdd_request) => {
    const { nom_categ } = nouveauCategorie;
    const query = "INSERT INTO categories (nom_categ) VALUES (?)";
    dataBase.query(query, [nom_categ], (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.insertId);
        }
    });
};

deleteCategorie = (id, result_bdd_request) => {
    dataBase.query("DELETE FROM categories WHERE id_categ = ?", id, (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.affectedRows);
        }
    });
};

module.exports = { getAllCategories, getCategorieById, updateCategorie, createCategorie, deleteCategorie};