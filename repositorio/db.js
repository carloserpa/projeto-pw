var Usuario = require('../model/Usuario');
var Profissao = require('../model/Profissao');

let profissoes = [];
var pedreiro = new Profissao(1,"Pedreiro", true);
var marceneiro = new Profissao(2,"Marceneiro", true);
var mestreDeObra = new Profissao(3,"Mestre de Obra", true);
profissoes.push(pedreiro);
profissoes.push(marceneiro);
profissoes.push(mestreDeObra);

let usuarios = [];
var usuario01 = new Usuario(1,"Carlos Serpa", "carlos.serpa@email.com", "32048093898");
usuario01.profissao = pedreiro;
var usuario02 = new Usuario(2,"Milena Serpa", "milena.serpa@email.com", "32048093898");
usuario02.profissao = marceneiro
var usuario03 = new Usuario(3,"Benjamin Serpa", "ben.serpa@email.com", "32048093898");
usuario03.profissao = mestreDeObra;
usuarios.push(usuario01);
usuarios.push(usuario02);
usuarios.push(usuario03);

module.exports = {
    profissoes,
    usuarios
  };