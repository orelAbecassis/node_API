//
// const router = require('express').Router();
//
// const {
//     getAllCategories,
//     getCategorieId,
//     updateCategorieId,
//     createCategorie
// } = require('../controllers/categorie.controller');
//
//
//
// router.get('/', getAllCategories); // GET localhost:8081/api/v1/produit
// router.get('/:id', getCategorieId); // GET localhost:8081/api/v1/animes/:id
// // router.get('/filter/:nom', getProduitName); // GET localhost:8081/api/v1/animes/filter/:nom
// router.post('/', createCategorie); // POST localhost:8081/api/v1/animes
// router.put('/:id', updateCategorieId); // PATCH localhost:8081/api/v1/animes/:id
//
// module.exports = router;
const router = require('express').Router();

const {
    getAllCategories,
    getCategorieById,
    updateCategorie,
    createCategorie,
    deleteCategorie

} = require('../controllers/categorie.controller');
const {getCategorieId} = require("../models/categorie.model");


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Récupère la liste des produits
 *     responses:
 *       200:
 *         description: Succès
 */
router.get('/', getAllCategories);
router.get('/:id', getCategorieById);
router.post('/', createCategorie);
router.put('/:id', updateCategorie);
router.delete('/:id', deleteCategorie);

module.exports=router;