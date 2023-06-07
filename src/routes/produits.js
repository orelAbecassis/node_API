const router = require('express').Router();

const {
    getAllProduits,
    getProduitById,
    getProduitByName,
    createProduits,
    uploadAProduitById,
    deleteProduitById

} = require('../controllers/produit.controller');


router.get('/', getAllProduits);
router.get('/:id', getProduitById);
router.get('/filter/:nom', getProduitByName);
router.get('/', createProduits);
router.get('/:id', uploadAProduitById);
router.get('/:id', deleteProduitById);

module.exports = router;

