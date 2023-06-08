
const produitsRoutes = require('./routes/produit');
app.use('/api/produit', produitsRoutes);
// const mongoose = require('monogoose');
//
// mongoose.connect('mongodb+srv://test:<test>@cluster0.zodhzxb.mongodb.net/',
// {
//     useNewUrlParser:true,
//     useUnifiedTopology: true})
//
//     .then(()=>console.log('Connexion à MongoDB réussie !'))
//     .catch(()=> console.log('Connexion à MongoDB échoué!'));
//
//
//
//
// // -- enregistrement instance de donne dans la bdd
// const Thing = require('./models/thing');
//
// app.post('/api/stuff',(req, res, next)=>{
//     delete req.body_id;
//     const thing = new Thing({
//         ...req.body
//     });
//     thing.save()
//         .then(()=>res.status(201).json({message: 'objet enregistré !'}))
//         .catch(error=>res.status(400).json({error}));
// });
//
//
//
// app.use('/api/stuff', (req, res, next) => {
//     const stuff = [
//         {
//             _id: 'oeihfzeoi',
//             title: 'Mon premier objet',
//             description: 'Les infos de mon premier objet',
//             imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//             price: 4900,
//             userId: 'qsomihvqios',
//         },
//         {
//             _id: 'oeihfzeomoihi',
//             title: 'Mon deuxième objet',
//             description: 'Les infos de mon deuxième objet',
//             imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//             price: 2900,
//             userId: 'qsomihvqios',
//         },
//     ];
//     res.status(200).json(stuff);
// });
//
//
//
//

//
//
//

//
//


// const mongoose = require('mongoose');
// const Thing = require('./models/thing');
//
// mongoose.connect('mongodb+srv://jimbob:<test>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority',
//     { useNewUrlParser: true,
//         useUnifiedTopology: true })
//     .then(() => console.log('Connexion à MongoDB réussie !'))
//     .catch(() => console.log('Connexion à MongoDB échouée !'));
//
//
// const express = require('express');
//
// const app = express();

// app.use((req, res, next) => {
//     console.log('Requête reçue !');
//     next();
// });
//
// app.use((req, res, next) => {
//     res.status(201);
//     next();
// });
//
// app.use((req, res, next) => {
//     res.json({ message: 'Votre requête a bien été reçue !' });
//     next();
// });
//
// app.use('/api/produit', (req, res, next) => {
//     Thing.find()
//         .then(things => res.status(200).json(things))
//         .catch(error => res.status(400).json({ error }));
// });
//
// app.use((req, res, next) => {
//     console.log('Réponse envoyée avec succès !');
// });
//
// module.exports = app;
//
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });
//
// app.post('/api/produit', (req, res, next) => {
//     delete req.body._id;
//     const thing = new Thing({
//         ...req.body
//     });
//     thing.save()
//         .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
//         .catch(error => res.status(400).json({ error }));
// });
//
//
// // recuperation unsitance specifique
// app.get('/api/produit/:id',(req, res, next)=>{
//     Thing.find()
//         .then(things=> res.status(200).json(things))
//         .catch(error =>res.status(400).json(error))});
//
//
// // mise a jour
// app.put('/api/produit/:id',(req, res, next)=>{
//     Thing.updateOne({_id: req.params.id}, { ...req.body, _id: req.params.id})
//         .then(() => res.status(200).json({message: 'objet modifie !'}))
//         .catch(error =>res.status(400).json(error))});
//
//
// // supprimer
// app.delete('/api/produit/:id',(req, res, next)=>{
//     Thing.updateOne({_id: req.params.id})
//         .then(() => res.status(200).json({message: 'objet supprime !'}))
//         .catch(error =>res.status(400).json(error))});
//
//
//
//
// app.use('/api/produit', (req, res, next) => {
//     const stuff = [
//         {
//             _id: 'oeihfzeoi',
//             title: 'Mon premier objet',
//             description: 'Les infos de mon premier objet',
//             imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//             price: 4900,
//             userId: 'qsomihvqios',
//         },
//         {
//             _id: 'oeihfzeomoihi',
//             title: 'Mon deuxième objet',
//             description: 'Les infos de mon deuxième objet',
//             imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//             price: 2900,
//             userId: 'qsomihvqios',
//         },
//     ];
//     res.status(200).json(stuff);
// });
