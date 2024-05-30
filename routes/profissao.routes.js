
const express = require('express');
const profissaoRouter = express.Router();

const profissaoControle = require('../controller/ProfissaoControle');
profissaoRouter.post('/cadastrar', profissaoControle.cadastrar);
profissaoRouter.get('/todos', profissaoControle.todos);
profissaoRouter.get('/buscar/:id', profissaoControle.buscar);
profissaoRouter.put('/atualizar/:id', profissaoControle.atualizar);
profissaoRouter.delete('/deletar/:id', profissaoControle.deletar);

module.exports = profissaoRouter;