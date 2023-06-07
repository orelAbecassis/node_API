const dataBase = require('../db/db-connect');

const ProduitConstructor = function (produit){
    this.id_produit = produit.id_produit;
    this.nom_produit = produit.nom_produit;
    this.prix = produit.prix;
    this.legende = produit.legende;
    this.image = produit.image;
};

getAllProduits = result_bdd_request =>{
    dataBase.query("SELECT * FROM produit", (error, response)=>{
        if(error){
            result_bdd_request(error)
        }
        result_bdd_request(null, response);
        });
};