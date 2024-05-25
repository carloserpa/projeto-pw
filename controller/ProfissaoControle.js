const express = require('express');
var Profissao = require('../model/Profissao');
var idProfissao = 0;
let profissaos = [];
profissaos.push(new Profissao(1,"Pedreiro", true));
profissaos.push(new Profissao(2,"Marceneiro", true));
profissaos.push(new Profissao(3,"Mestre de Obra", true));

const cadastrar =  async (req, res) => {
    const {descricao, ativo } = req.body;
    if ( !descricao || !ativo) {
      return res.status(400).json({message:'Campo obrigatório'});
    }
    
    if(profissaos.length > 0){
      
       idProfissao = profissaos.at(profissaos.length -1).id + 1;
    } else {
      idProfissao = 1;
    }

    var profissao = new Profissao(idProfissao,descricao, ativo);    
    profissaos.push(profissao);
    res.status(201).json(profissao);
}

const todos = async (req, res) => {
    res.json(profissaos);
};

const buscar = async (req, res) => {  
    const profissao = profissaos.find(b => b.id === parseInt(req.params.id));
    if (!profissao) {
      return res.status(404).json({message:'Profissao não encontrado'});
    }
    console.log("Estou aqui:" + profissao.descricao)
    res.json(profissao);
};

const atualizar = async (req, res) => {
    const profissao = profissaos.find(b => b.descricao === parseInt(req.params.descricao));
    if (!profissao) {
      return res.status(404).json({message:'Profissao não encontrado'});
    }
  
    const { descricao, ativo } = req.body;
    var profissaoAtualizar = new Client(descricao, ativo);
    profissaoAtualizar.descricao = descricao || profissao.descricao;
    profissaoAtualizar.ativo = ativo || profissao.ativo;
  
    res.json(profissaoAtualizar);
};

const deletar = async (req, res) => {
    const indiceProfissao = books.findIndex(b => b.descricao === parseInt(req.params.descricao));
    if (indiceProfissao === -1) {
      return res.status(404).json({message:'Profissao não encontrado'});
    }
  
    profissaos.splice(indiceProfissao, 1);
    res.status(204).send();
};

module.exports = {
  cadastrar,
  todos,
  buscar,
  atualizar,
  deletar
};