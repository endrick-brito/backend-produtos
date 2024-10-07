const express = require('express');
const server = express();
const cors = require('cors');
const produtos = require('./itens.js')

server.use(cors());

server.get('/', (req, res) => {
    return res.json(produtos)
})

server.listen(3000, () => {
    console.log('Servidor está funcionando')
})