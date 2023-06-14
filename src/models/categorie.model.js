

const dataBase = require('../db/db-connect');

// ----------------------------------------------
// Constructeur de l'objet Categorie
// ----------------------------------------------
const CategorieConstructor = function (categorie){
    this.id_categ = categorie.id_categ;
    this.nom_categ = categorie.nom_categ;
};

// ----------------------------------------------
// Récupération de toutes les catégories
// ----------------------------------------------
getAllCategories = result_bdd_request => {
    dataBase.query("SELECT * FROM categories", (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, response);
    });
};

// ----------------------------------------------
// Récupération d'une catégorie par ID
// ----------------------------------------------
getCategorieById = (id, result_bdd_request) => {
    dataBase.query("SELECT * FROM categories WHERE id_categ = ?", id, (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response);
        }
    });
};

// ----------------------------------------------
// Mise à jour d'une catégorie
// ----------------------------------------------
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

// ----------------------------------------------
// Création d'une nouvelle catégorie
// ----------------------------------------------
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

// ----------------------------------------------
// Suppression d'une catégorie
// ----------------------------------------------
deleteCategorie = (id, result_bdd_request) => {
    dataBase.query("DELETE FROM categories WHERE id_categ = ?", id, (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.affectedRows);
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
