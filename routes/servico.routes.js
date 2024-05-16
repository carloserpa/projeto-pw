
const express = require('express');
const servicoRouter = express.Router();

const servicoControle = require('./../controller/ServicoControle');
servicoRouter.post('/', servicoControle.cadastrar);
servicoRouter.get('/', servicoControle.todos);
servicoRouter.get('/:nome', servicoControle.buscar);
servicoRouter.put('/:nome', servicoControle.atualizar);
servicoRouter.delete('/:nome', servicoControle.deletar);

module.exports = servicoRouter;