
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
 * /categories:
 *   get:
 *     summary: Récupérer toutes les catégories.
 *     responses:
 *       200:
 *         description: Succès de la requête avec les catégories récupérées.
 */
router.get('/', getAllCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Récupérer une catégorie par ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la catégorie à récupérer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec la catégorie récupérée.
 *       404:
 *         description: La catégorie avec l'ID spécifié n'a pas été trouvée.
 */
router.get('/:id', getCategorieById);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Créer une nouvelle catégorie.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categorie'
 *     responses:
 *       200:
 *         description: Succès de la requête avec la catégorie créée.
 *       400:
 *         description: Requête incorrecte, vérifiez les données fournies.
 */
router.post('/', createCategorie);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la catégorie à mettre à jour.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categorie'
 *     responses:
 *       200:
 *         description: Succès de la requête avec la catégorie mise à jour.
 *       400:
 *         description: Requête incorrecte, vérifiez les données fournies.
 *       404:
 *         description: La catégorie avec l'ID spécifié n'a pas été trouvée.
 */
router.put('/:id', updateCategorie);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Supprimer une catégorie.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la catégorie à supprimer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec la catégorie supprimée.
 *       404:
 *         description: La catégorie avec l'ID spécifié n'a pas été trouvée.
 */
router.delete('/:id', deleteCategorie);

module.exports=router;