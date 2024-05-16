const express = require('express');
const Servico = require('../model/Servico');

let servicos = [];

const cadastrar = async (req, res) => {
    const { profissao, tipoDeServico, desejaOrcamento, descricaoDoServico, valorDaProposta } = req.body;
    if (!profissao || !tipoDeServico || !desejaOrcamento || !descricaoDoServico || !valorDaProposta) {
      return res.status(400).json({message: 'Verificar campos obrigatórios Obrigatório(s)'});
    }
      
    var servico = new Servico(profissao, tipoDeServico, desejaOrcamento, descricaoDoServico, valorDaProposta);    
    servicos.push(servico);
    res.status(201).json(servico);
};

const todos = async (req, res) => {
    res.json(servicos);
};

const buscar = async (req, res) => {
    const servico = servicos.find(b => b.profissao === parseInt(req.params.profissao));
    if (!servico) {
      return res.status(404).json({message:'Servico não encontrado'});
    }
    res.json(servico);
};

const atualizar = async (req, res) => {
    const servico = servicos.find(b => b.profissao === parseInt(req.params.profissao));
    if (!servico) {
      return res.status(404).json({message:'Book not found'});
    }
  
    const {profissao, tipoDeServico, desejaOrcamento, descricaoDoServico, valorDaProposta } = req.body;
    var servicoAtualizar = new Servico(profissao, tipoDeServico, desejaOrcamento, descricaoDoServico, valorDaProposta); 
    servicoAtualizar.profissao = profissao || servico.profissao;
    servicoAtualizar.tipoDeServico = tipoDeServico || servico.tipoDeServico;
    servicoAtualizar.desejaOrcamento = desejaOrcamento;
    servicoAtualizar.descricaoDoServico = descricaoDoServico;
    servicoAtualizar.valorDaProposta = valorDaProposta;
  
    res.json(servicoAtualizar);
};

const deletar = async (req, res) => {
    const indiceServico = servicos.findIndex(b => b.profissao === parseInt(req.params.profissao));
    if (indiceServico === -1) {
      return res.status(404).json({message: 'Servico não encontrado'});
    }
  
    servicos.splice(indiceServico, 1);
    res.status(204).send();
};
module.exports = {
  cadastrar,
  todos,
  buscar,
  atualizar,
  deletar
};