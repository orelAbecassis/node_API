
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