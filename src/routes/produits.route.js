// ----------------------------------------------
// Importation du module de routage d'Express
// ----------------------------------------------

const router = require('express').Router();

// ----------------------------------------------
// Importation des fonctions du contrôleur de catégorie
// ----------------------------------------------

const {
    getAllProduits,
    getProduitId,
    createProduit,
    updateProduitId,
    deleteProduitId
} = require('../controllers/produit.controller');



// ----------------------------------------------
//Annotation pour la documentation
// ----------------------------------------------
/**
 * @swagger
 * /produits:
 *   get:
 *     tags:
 *       - Produit
 *     summary: Récupérer tous les produits.
 *     responses:
 *       200:
 *         description: Succès de la requête avec les produits récupérés.
 */
// ----------------------------------------------
// Définition de la route pour obtenir toutes les produits
// ----------------------------------------------

router.get('/', getAllProduits);


/**
 * @swagger
 * /produits/{id}:
 *   get:
 *     tags:
 *       - Produit
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

// ----------------------------------------------
// Définition de la route pour obtenir une produit
// ----------------------------------------------
router.get('/:id', getProduitId);




/**
 * @swagger
 * /produits:
 *   post:
 *     tags:
 *       - Produit
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

// ----------------------------------------------
// Définition de la route pour créer un produit
// ----------------------------------------------
router.post('/', createProduit);

/**
 * @swagger
 * /produits/{id}:
 *   put:
 *     tags:
 *       - Produit
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
// ----------------------------------------------
// Définition de la route pour mettre à jour un produit
// ----------------------------------------------
router.put('/:id',updateProduitId );


/**
 * @swagger
 * /produits/{id}:
 *   delete:
 *     tags:
 *       - Produit
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

// ----------------------------------------------
// Définition de la route pour supprimer un produit
// ----------------------------------------------
router.delete('/:id', deleteProduitId);


// ----------------------------------------------
// Exportation du module de routage
// ----------------------------------------------
module.exports = router;
