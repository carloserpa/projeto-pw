const express = require('express');
var Cliente = require('./../model/Cliente');

let clientes = [];

const cadastrar =  async (req, res) => {
    const { nome, email, telefone } = req.body;
    if (!nome ||  !email || !telefone) {
      return res.status(400).json({message:'Nome é obrigatório'});
    }
  
    var cliente = new Cliente(nome, email, telefone);    
    clientes.push(cliente);
    res.status(201).json(cliente);
}

const todos = async (req, res) => {
    res.json(clientes);
};

const buscar = async (req, res) => {
    const cliente = clientes.find(b => b.nome === parseInt(req.params.nome));
    if (!cliente) {
      return res.status(404).json({message:'Cliente não encontrado'});
    }
    res.json(cliente);
};

const atualizar = async (req, res) => {
    const cliente = clientes.find(b => b.nome === parseInt(req.params.nome));
    if (!cliente) {
      return res.status(404).json({message:'Cliente não encontrado'});
    }
  
    const { nome, email, telefone } = req.body;
    var clienteAtualizar = new Client(nome, email, telefone);
    clienteAtualizar.ge = email || cliente.email;
    clienteAtualizar.telefone = telefone || cliente.telefone;
  
    res.json(clienteAtualizar);
};

const deletar = async (req, res) => {
    const indiceCliente = books.findIndex(b => b.nome === parseInt(req.params.nome));
    if (indiceCliente === -1) {
      return res.status(404).json({message:'Cliente não encontrado'});
    }
  
    clientes.splice(indiceCliente, 1);
    res.status(204).send();
};

module.exports = {
  cadastrar,
  todos,
  buscar,
  atualizar,
  deletar
};