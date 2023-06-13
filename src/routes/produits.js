
const router = require('express').Router();

const {
    getAllProduits,
    getProduitId,
    // getProduitName,
     createProduit,
     updateProduitId,
    deleteProduitId
} = require('../controllers/produit.controller');
//const {createProduit, updateProduitId, deleteProduitId} = require("../models/produit.model");



router.get('/', getAllProduits); // GET localhost:8081/api/v1/produit
router.get('/:id', getProduitId); // GET localhost:8081/api/v1/animes/:id
// router.get('/filter/:nom', getProduitName); // GET localhost:8081/api/v1/animes/filter/:nom
router.post('/', createProduit); // POST localhost:8081/api/v1/animes
router.put('/:id', updateProduitId); // PATCH localhost:8081/api/v1/animes/:id
router.delete('/:id', deleteProduitId); // DELETE localhost:8081/api/v1/animes/:id

module.exports = router;



// ----------------------------------------------
// Définition de l'enssembles des constantes utilisant le controller
// ----------------------------------------------


// ----------------------------------------------
// Importation du module router de express
// ----------------------------------------------