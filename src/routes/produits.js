const router = require('express').Router();

const {
    getAllProduits,
    getProduitId,
    createProduit,
    updateProduitId,
    deleteProduitId
} = require('../controllers/produit.controller');

router.get('/', getAllProduits);
/**
 * @swagger
 * /produits:
 *   get:
 *     summary: Récupérer tous les produits.
 *     responses:
 *       200:
 *         description: Succès de la requête avec les produits récupérés.
 */

router.get('/:id', getProduitId);
/**
 * @swagger
 * /produits/{id}:
 *   get:
 *     summary: Récupérer un produit par ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du produit à récupérer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec le produit récupéré.
 *       404:
 *         description: Le produit avec l'ID spécifié n'a pas été trouvé.
 */

router.post('/', createProduit);
/**
 * @swagger
 * /produits:
 *   post:
 *     summary: Créer un nouveau produit.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Produit'
 *     responses:
 *       200:
 *         description: Succès de la requête avec le produit créé.
 *       400:
 *         description: Requête incorrecte, vérifiez les données fournies.
 */

router.put('/:id', updateProduitId);
/**
 * @swagger
 * /produits/{id}:
 *   put:
 *     summary: Mettre à jour un produit.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du produit à mettre à jour.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Produit'
 *     responses:
 *       200:
 *         description: Succès de la requête avec le produit mis à jour.
 *       400:
 *         description: Requête incorrecte, vérifiez les données fournies.
 *       404:
 *         description: Le produit avec l'ID spécifié n'a pas été trouvé.
 */

router.delete('/:id', deleteProduitId);
/**
 * @swagger
 * /produits/{id}:
 *   delete:
 *     summary: Supprimer un produit.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du produit à supprimer.
 *     responses:
 *       200:
 *         description: Succès de la requête avec le produit supprimé.
 *       404:
 *         description: Le produit avec l'ID spécifié n'a pas été trouvé.
 */

module.exports = router;
