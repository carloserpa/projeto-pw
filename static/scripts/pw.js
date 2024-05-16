const apiUrl = "http://localhost:3000";

document.getElementById('clienteBody')
.onload = async function hello() {
  try {
    const response = await fetch("/hello", { method: "GET" });   
    const movies = await response.json();
    console.log(movies);    
  } catch (error) {
    console.error("Error:", error)
  }
 
}

document.getElementById('form-cadastro-cliente').addEventListener('submit', function(e){
  e.preventDefault()
 
  var nomeCliente=document.getElementById('nomeCliente').value
  var emailCliente=document.getElementById('emailCliente').value
  var telefoneCliente=document.getElementById('telefoneCliente').value
 
  fetch('/api/clientes/', {
   method: 'POST',
   body: JSON.stringify({
     nome:nomeCliente,
     email:emailCliente,
     telefone:telefoneCliente 
   }),
   headers: {
     'Content-type': 'application/json; charset=UTF-8',
   }
   })
   .then(function(response){ 
      return response.json()})
   .then(function(data)
    {
      console.log(data)
      window.location.reload();  
  }).catch(error => console.error('Error:', error)); 
 });
