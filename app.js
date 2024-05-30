const express = require('express');
const app = express();
var fs = require('fs');
const clienteRouter = require('./routes/usuario.routes');
const servicoRouter = require('./routes/servico.routes');
const profissaoRouter = require('./routes/profissao.routes');
app.use(express.json());

app.use(express.static(__dirname + '/'));

//Profissao
app.get('/profissao/listar', (req, res) => {
  res.sendFile('listar.html', {root: __dirname + "/static/html/profissao/"});
});
app.get('/profissao/cadastrar', (req, res) => {
  res.sendFile('form.html', {root: __dirname + "/static/html/profissao/"});
});
app.get('/profissao/atualizar', (req, res) => {
  res.sendFile('form.html', {root: __dirname + "/static/html/profissao/"});
});


// Usuarios
app.get('/usuario/listar', (req, res) => {
  res.sendFile('listar.html', {root: __dirname + "/static/html/usuario/"});
});
app.get('/usuario/cadastrar', (req, res) => {
  res.sendFile('form.html', {root: __dirname + "/static/html/usuario/"});
});
app.get('/usuario/atualizar', (req, res) => {
  res.sendFile('form.html', {root: __dirname + "/static/html/usuario/"});
});

//Servico
app.get('/servico/listar', (req, res) => {
  res.sendFile('servico.html', {root: __dirname + "/static/html/servico/"});
});
app.get('/servico/confirmacao', (req, res) => {
  res.sendFile('confirmacao.html', {root: __dirname + "/static/html/servico/"});
});



app.get('/', function(req, res){
  res.sendfile('index.html', { root: __dirname + "/static/" } );
});;

app.get("/hello", (req, res) => {
  return res.status(200).json({message: 'Hello'});
});

app.use('/api/profissoes', profissaoRouter);
app.use('/api/usuarios', clienteRouter);
app.use('/api/servicos', servicoRouter);

app.listen(3000, () => {
    console.log('our app is running locally...');
});