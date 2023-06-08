// const dotenv = require('dotenv');
// dotenv.config();

// console.log('your port is 8081');


// const port = process.env.PORT;
const dotenv = require('dotenv');
const express = require('express');
const produitRoute = require('./routes/produits');

dotenv.config();

const server = express();
server.use(express.json());
server.set('json spaces', 2);

server.use('/api/v1/produits', produitRoute);

server.get('/', (req, res) => {
    res.send('Hello, World!');
});

const port = Number(process.env.PORT || 8081);
server.listen(port, () => {
    console.log(`Your port is ${port}`);
});

module.exports=server;