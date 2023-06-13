
const router = require('express').Router();

const {
    getAllCategories,
    getCategorieId,
    // updateCategorieId,
    // createCategorie
} = require('../controllers/categorie.controller');



router.get('/', getAllCategories); // GET localhost:8081/api/v1/produit
router.get('/:id', getCategorieId); // GET localhost:8081/api/v1/animes/:id
// router.get('/filter/:nom', getProduitName); // GET localhost:8081/api/v1/animes/filter/:nom
// router.post('/', createCategorie); // POST localhost:8081/api/v1/animes
// router.put('/:id', updateCategorieId); // PATCH localhost:8081/api/v1/animes/:id

module.exports = router;
