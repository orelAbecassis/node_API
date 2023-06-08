const dataBase = require('../db/db-connect');


const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    titre: {type: String, required: true},
    nom_produit: {type: String, required: true},
    prix: {type: Number, required: true},
    legende: {type: String, required: true},
    image: {type: String, required: true},

});


// const ProduitConstructor = function (produit){
//     this.id_produit = produit.id_produit;
//     this.nom_produit = produit.nom_produit;
//     this.prix = produit.prix;
//     this.legende = produit.legende;
//     this.image = produit.image;
// };
//
// getAllProduits = result_bdd_request =>{
//     dataBase.query("SELECT * FROM produits", (error, response)=>{
//         if(error){
//             result_bdd_request(error)
//         }
//         result_bdd_request(null, response);
//     });
// };

module.exports = { getAllProduits};