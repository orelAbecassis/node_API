// ----------------------------------------------
// Importation de la connexion à la bdd
// ----------------------------------------------
const dataBase = require('../db/db-connect');
// const {deleteProduitId} = require("../routes/produits");


// ----------------------------------------------
// Création d'un constructeur pour la création et la mise à jour des enregistrements
// ----------------------------------------------
const ProduitConstructor = function (produit) {
    this.id_categ = produit.id_categ;
    this.nom_produit = produit.nom_produit;
    this.prix = produit.prix;
    this.legende = produit.legende;
    this.image = produit.image;

};

// ----------------------------------------------
// Récupérer l'enssembles des animes
// ----------------------------------------------
getAllProduits = result_bdd_request => {
    dataBase.query("SELECT p.*, c.nom_categ\n" +
        "FROM produits AS p\n" +
        "INNER JOIN categories AS c ON p.nom_categ = c.id_categ;\n", (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        // Le premier null représente les erreurs
        result_bdd_request(null, response);
    });
};


// ----------------------------------------------
// Récupérer un anime par son ID
// ----------------------------------------------
getProduitId = (ID, result_bdd_request) => {
    const query = 'SELECT p.*, c.nom_categ ' +
        'FROM produits AS p ' +
        'INNER JOIN categories AS c ON p.nom_categ = c.id_categ ' +
        'WHERE p.id = ?';

    dataBase.query(query, [ID], (error, response) => {
        if (error) {
            result_bdd_request(error);
            return;
        }

        if (response.length) {
            result_bdd_request(null, response);
        } else {
            result_bdd_request({ kind: "index_not_found" });
        }
    });
};



// ----------------------------------------------
// Récupérer un anime par son nom
// ----------------------------------------------
const getProduitName = (selectedName, result_bdd_request) => {
    const query = `SELECT p.*, c.nom_categ
                    FROM produits AS p
                    INNER JOIN categories AS c ON p.nom_categ = c.id_categ
                    WHERE p.nom = ?`;

    dataBase.query(query, [selectedName], (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else if (response.length) {
            result_bdd_request(null, response);
        } else {
            result_bdd_request({ kind: "name_not_found" });
        }
    });
};




// ----------------------------------------------
// Créer un nouvel enregistrement en BDD
// ----------------------------------------------

createProduit = (nouveauProduit, result_bdd_request) => {
    const {nom_produit, prix, legende, image, nom_categ } = nouveauProduit;
    let query;
    let values;

    if (nom_categ) {
        query = `INSERT INTO produits (nom, prix, legende, image, nom_categ) VALUES (?, ?,?,?, ?)`;
        values = [nom_produit, prix, legende, image, nom_categ];
    } else {
        query = `INSERT INTO produits (nom, prix, legende, image) VALUES (?, ?,?,?)`;
        values = [nom_produit, prix, legende, image];
    }
    dataBase.query(query, values, (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else {
            result_bdd_request(null, response.insertId);
        }
    });
};




// ----------------------------------------------
// Mettre à jour un anime par son ID
// ----------------------------------------------
const updateProduitId = (produitId, updatedData, result_bdd_request) => {
    const query = `UPDATE produits SET ? WHERE id = ?`;

    dataBase.query(query, [updatedData, produitId], (error, response) => {
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
// Supprimer un anime par son ID
// ----------------------------------------------
deleteProduitId = (selectedID, result_bdd_request) => {
    dataBase.query(`DELETE FROM produits
                    WHERE id = ${selectedID}`, (error, response) => {
        if (error) {
            result_bdd_request(error);
        } else if (response.affectedRows === 0) {
            result_bdd_request({ kind: "index_not_found" });
        } else {
            result_bdd_request(null, response);
        }
    });
};


module.exports = {
    ProduitConstructor,
    getAllProduits,
    getProduitId,
    getProduitName,
    createProduit,
    updateProduitId,
    deleteProduitId,
};
