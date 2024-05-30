const express = require('express');
var Profissao = require('../model/Profissao');
var db = require('../repositorio/db');
var idProfissao = 0;
let profissoes = db.profissoes;

const cadastrar =  async (req, res) => {
    const {descricao, ativo } = req.body;
    if ( !descricao || !ativo) {
      return res.status(400).json({message:'Campo obrigatório'});
    }
    
    if(profissoes.length > 0){      
       idProfissao = profissoes.at(profissoes.length -1).id + 1;
    } else {
      idProfissao = 1;
    }
    var profissao = new Profissao(idProfissao,descricao, ativo);    
    profissoes.push(profissao);
    res.status(201).json(profissao);
}

const todos = async (req, res) => {
    res.json(profissoes);
};

const buscar = async (req, res) => {  
    const profissao = profissoes.find(b => b.id === parseInt(req.params.id));
    if (!profissao) {
      return res.status(404).json({message:'Profissao não encontrado'});
    }
    res.json(profissao);
};

const atualizar = async (req, res) => {
    const profissaoAtualizar = profissoes.find(b => b.id === parseInt(req.params.id));
    const indice = profissoes.findIndex(b => b.id === parseInt(req.params.id));
    console.log(indice);
    if (!profissaoAtualizar) {
      return res.status(404).json({message:'Profissao não encontrado'});
    }
  
    const { descricao, ativo } = req.body;
    //var profissaoAtualizar = new Client(descricao, ativo);
    profissaoAtualizar.descricao = descricao || profissaoAtualizar.descricao;
    profissaoAtualizar.ativo = ativo || profissaoAtualizar.ativo;
    profissoes.splice(indice,1, profissaoAtualizar)
  
    res.json(profissaoAtualizar);
};

const deletar = async (req, res) => {
    const indiceProfissao = profissoes.findIndex(b => b.id === parseInt(req.params.id));
    if (indiceProfissao === -1) {
      return res.status(404).json({message:'Profissao não encontrado'});
    }
  
    profissoes.splice(indiceProfissao, 1);
    res.status(204).send();
};

module.exports = {
  cadastrar,
  todos,
  buscar,
  atualizar,
  deletar
};