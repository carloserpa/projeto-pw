const express = require('express');
const app = express();
var fs = require('fs');
const clienteRouter = require('./routes/cliente.routes');
const servicoRouter = require('./routes/servico.routes');
app.use(express.json());

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.sendfile('cliente.html', { root: __dirname + "/static/" } );
});;

app.get("/hello", (req, res) => {
  return res.status(200).json({message: 'Hello'});
});

app.use('/api/clientes', clienteRouter);
app.use('/api/servicos', servicoRouter);

app.listen(3000, () => {
    console.log('our app is running locally...');
});