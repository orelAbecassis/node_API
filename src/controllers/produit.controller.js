const produitModel = require('../models/produit.model' );

getAllProduits = (request, response)=>{
    produitModel.getAllPorduits((error, data)=>{
        if(error)

            response.status(500).send({
                message:
                error.message  ||"Une erreur est surveneur en essayant de récuperer la table produits"
            });

        else
            response.send(data);

    });
};