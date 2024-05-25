const profissaoRota = require('../routes/profissao.routes');
const express = require('express');
var Usuario = require('../model/Usuario');
var idUsuario = 0;
let usuarios = [];
usuarios.push(new Usuario(1,"Carlos Serpa", "carlos.serpa@email.com", "32048093898"));
usuarios.push(new Usuario(2,"Milena Serpa", "milena.serpa@email.com", "32048093898"));
usuarios.push(new Usuario(3,"Benjamin Serpa", "ben.serpa@email.com", "32048093898"));

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
  console.log("EStou aqui")
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
    const usuario = usuarios.find(b => b.nome === parseInt(req.params.nome));
    if (!usuario) {
      return res.status(404).json({message:'Usuario não encontrado'});
    }
    res.json(usuario);
};

const atualizar = async (req, res) => {
    const usuario = usuarios.find(b => b.nome === parseInt(req.params.nome));
    if (!usuario) {
      return res.status(404).json({message:'Usuario não encontrado'});
    }
  
    const { nome, email, telefone } = req.body;
    var usuarioAtualizar = new Client(nome, email, telefone);
    usuarioAtualizar.ge = email || usuario.email;
    usuarioAtualizar.telefone = telefone || usuario.telefone;
  
    res.json(usuarioAtualizar);
};

const deletar = async (req, res) => {
    console.log(req.params.id)
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