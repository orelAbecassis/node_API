const express = require('express');
const router = express.Router();

const Thing = require('../models/produit.model');

const produitsCtrl = require('../controllers/produit.controller');

router.get('/', produitsCtrl.getAllProduits);
router.get('/:id', produitsCtrl.getProduitById);
router.put('/:id', produitsCtrl.createProduit);
router.delete('/:id', produitsCtrl.uploadAProduitById);
router.delete('/:id', produitsCtrl.deleteProduitById);

module.exports = router;

exports.createProduit( (req, res, next) => {
    const thing = new Thing({
        titre: req.body.titre,
        nom_produit: req.body.nom_produit,
        prix:req.body.prix,
        legende: req.body.legende,
        image: req.body.image,
    });
    thing.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
});

exports.getProduitById =( (req, res, next) => {
    Thing.findOne({
        _id: req.params.id
    }).then(
        (thing) => {
            res.status(200).json(thing);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
});

exports.uploadAProduitById=( (req, res, next) => {
    const thing = new Thing({
        _id: req.params.id,
        titre: req.body.titre,
        nom_produit: req.body.nom_produit,
        prix:req.body.prix,
        legende: req.body.legende,
        image: req.body.image,
    });
    Thing.updateOne({_id: req.params.id}, thing).then(
        () => {
            res.status(201).json({
                message: 'Thing updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
});

exports.deleteProduitById=( (req, res, next) => {
    Thing.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
});

exports.getAllProduits= (req, res, next) => {
    Thing.find().then(
        (things) => {
            res.status(200).json(things);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

module.exports = router;



// const stuffCtrl = require('../controllers/produit.controller');

// router.get('/', stuffCtrl.getAllProduits);



// const router = require('express').Router();
//
// const {
//     getAllProduits,
//     getProduitById,
//     getProduitByName,
//     createProduits,
//     uploadAProduitById,
//     deleteProduitById
//
// } = require('../controllers/produit.controller');
//
//
// router.get('/', getAllProduits);
// router.get('/:id', getProduitById);
// router.get('/filter/:nom', getProduitByName);
// router.get('/', createProduits);
// router.get('/:id', uploadAProduitById);
// router.get('/:id', deleteProduitById);
//
// module.exports = router;

