const profissaoRota = require('../routes/profissao.routes');
const express = require('express');
var Usuario = require('../model/Usuario');
var Profissao = require('../model/Profissao');
var db = require('../repositorio/db');
var idUsuario = 0;
let usuarios = db.usuarios;

const cadastrar =  async (req, res) => {
    const {nome, email, telefone, profissao } = req.body;
    if ( !nome ||  !email || !telefone) {
      return res.status(400).json({message:'Campo obrigatório'});
    }
    
    if(usuarios.length > 0){      
       idUsuario = usuarios.at(usuarios.length -1).id + 1;
    } else {
      idUsuario = 1;
    }

    var usuario = new Usuario(idUsuario,nome, email, telefone);
    if (!profissao ) {
      usuario.setProfissao(0);
    } else {
      usuario.setProfissao(profissao);
    }
    usuarios.push(usuario);
    res.status(201).json(usuario);
}

const todos = async (req, res) => {
  
  function getProfissao(id){
    fetch("/api/profissoes/buscar/" + id, {
      method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }      
      })
      .then(function(response){ 
         return response.json()})
      .then(function(data){
        console.log("VAlor: "+ data)
         return "data";
        
      }).catch(error => console.error('Error:', error)
    )
   
  };
   // console.log(hello.descricao)
    res.json(usuarios);
};

const buscar = async (req, res) => {
    const usuario = usuarios.find(b => b.id === parseInt(req.params.id));
    if (!usuario) {
      return res.status(404).json({message:'Usuario não encontrado'});
    }
    res.json(usuario);
};

const atualizar = async (req, res) => {
    const usuarioAtualizar = usuarios.find(b => b.id === parseInt(req.params.id));
    const indice = usuarios.findIndex(b => b.id === parseInt(req.params.id));
    if (!usuarioAtualizar) {
      return res.status(404).json({message:'Usuario não encontrado'});
    }
    const { nome, email, telefone, profissaoId } = req.body;
    var profissaoAtualizar = db.profissoes.at(parseInt(profissaoId));
    //const profissaoId = usuarios.findIndex(b => b.id === parseInt(req.params.id));
    
    //var usuarioAtualizar = new Client(nome, email, telefone);
    usuarioAtualizar.nome = nome || usuarioAtualizar.nome;
    usuarioAtualizar.email = email || usuarioAtualizar.email;
    usuarioAtualizar.telefone = telefone || usuarioAtualizar.telefone;
    usuarioAtualizar.profissao = profissaoAtualizar || usuarioAtualizar.profissao;
    usuarios.splice(indice,1, usuarioAtualizar)
  
    res.json(usuarioAtualizar);
};

const deletar = async (req, res) => {
    const indiceUsuario = usuarios.findIndex(b => b.id === parseInt(req.params.id));
    if (indiceUsuario === -1) {
      return res.status(404).json({message:'Usuario não encontrado'});
    }
  
    usuarios.splice(indiceUsuario, 1);
    res.status(204).send();
};

module.exports = {
  cadastrar,
  todos,
  buscar,
  atualizar,
  deletar
};