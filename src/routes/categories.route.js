// ----------------------------------------------
// Importation du module de routage d'Express
// ----------------------------------------------

const router = require('express').Router();

// ----------------------------------------------
// Importation des fonctions du contrôleur de catégorie
// ----------------------------------------------

const {
    getAllCategories,
    getCategorieById,
    updateCategorie,
    createCategorie,
    deleteCategorie
} = require('../controllers/categorie.controller');

// ----------------------------------------------
//Annotation pour la documentation
// ----------------------------------------------
/**
 * @swagger
 * /categories:
 *   get:
 *     tags:
 *       - Categorie
 *     summary: Récupérer toutes les catégories.
 *     responses:
 *       200:
 *         description: Succès de la requête avec les catégories récupérées.
 */

// ----------------------------------------------
// Définition de la route pour obtenir toutes les catégories
// ----------------------------------------------

router.get('/', getAllCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     tags:
 *       - Categorie
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
// ----------------------------------------------
// Définition de la route pour obtenir une categorie
// ----------------------------------------------
router.get('/:id', getCategorieById);

/**
 * @swagger
 * /categories:
 *   post:
 *     tags:
 *       - Categorie
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
// ----------------------------------------------
// Définition de la route pourcréer une catégorie
// ----------------------------------------------
router.post('/', createCategorie);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     tags:
 *       - Categorie
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
// ----------------------------------------------
// Définition de la route pour mettre à jour une categorie
// ----------------------------------------------
router.put('/:id', updateCategorie);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     tags:
 *       - Categorie
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
// ----------------------------------------------
// Définition de la route pour supprimer une catégorie
// ----------------------------------------------
router.delete('/:id', deleteCategorie);


// ----------------------------------------------
// Exportation du module de routage
// ----------------------------------------------

module.exports=router;