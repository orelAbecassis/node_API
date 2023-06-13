
const dotenv = require('dotenv');
const express = require('express');

const produitRoute = require('./routes/produits');
const categorieRoute = require('./routes/categories');
const docRoute = require('./routes/swagger.route')


dotenv.config();

const server = express();
server.use(express.json());
server.set('json spaces', 2);
server.use('/api/v1/docs',docRoute);
server.use('/api/v1/produits', produitRoute);
server.use('/api/v1/categories', categorieRoute);

server.get('/', (req, res) => {
    res.send('Hello, World!');
});


server.use('/api/v1/produits/', produitRoute);
server.use('/api/v1/categories/', categorieRoute);
server.use('/api/v1/produits/', produitRoute);
server.use('/api/v1/categories/', categorieRoute);
server.use('/api/v1/produits/', produitRoute);
server.use('/api/v1/categories/', categorieRoute);
server.use('/api/v1/produits', produitRoute);
server.use('/api/v1/categories', categorieRoute);


const port = Number(process.env.PORT || 8081);
server.listen(port, () => {
    console.log(`Your port is ${port}`);
});

module.exports=server;