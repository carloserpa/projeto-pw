
const express = require('express');
const usuarioRouter = express.Router();

const usuarioControle = require('../controller/UsuarioControle');
usuarioRouter.post('/cadastrar', usuarioControle.cadastrar);
usuarioRouter.get('/todos', usuarioControle.todos);
usuarioRouter.get('/buscar/:nome', usuarioControle.buscar);
usuarioRouter.put('/atualizar/:nome', usuarioControle.atualizar);
usuarioRouter.delete('/deletar/:id', usuarioControle.deletar);

module.exports = usuarioRouter;