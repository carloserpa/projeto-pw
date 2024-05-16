
const express = require('express');
const clienteRouter = express.Router();

const clienteControle = require('./../controller/ClienteControle');
clienteRouter.post('/', clienteControle.cadastrar);
clienteRouter.get('/', clienteControle.todos);
clienteRouter.get('/:nome', clienteControle.buscar);
clienteRouter.put('/:nome', clienteControle.atualizar);
clienteRouter.delete('/:nome', clienteControle.deletar);

module.exports = clienteRouter;