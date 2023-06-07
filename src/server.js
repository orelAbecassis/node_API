

// const dotenv = require('dotenv');
// dotenv.config();

// console.log('your port is 8081');


// const port = process.env.PORT;
const dotenv = require('dotenv');
const express = require('express');

// const produitRoute = require('./routes/produits');


dotenv.config();

const server = express();
server.use(express.json());
server.set('json spaces', 2);

// serverJson.use('/api/v1', produitRoute);
// serverJson.use('/api/v1/livre', livreRoute);


const port = Number(process.env.PORT || 8081);
console.log(`Your port is ${port}`);
server.listen(port)

module.exports = server;


