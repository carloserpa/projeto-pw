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
  document.getElementById("group_profissao").hidden = true;  
}

document.getElementById('body_clientes')
.onload = async function todos() {
  try {
    const response = await fetch("/todos", { method: "GET" }); 
    const movies = await response.json();  
    console.log(movies);    
    /*response.json()
    .then(data => {
      console.log(data);   
      if (data.data.length > 0) {

        var temp = "";
        data.data.forEach((itemData) => {
          temp += "<tr>";
          temp += "<td>" + itemData.id + "</td>";
          temp += "<td>" + itemData.employee_name + "</td>";
          temp += "<td>" + itemData.employee_salary + "</td></tr>";
        });
        document.getElementById('data').innerHTML = temp;
      }
    });*/
     
  } catch (error) {
    console.error("Error:", error)
  }
}

const cienteColecao = document.getElementById('toy-collection')
function renderizarClientes(clientes) {
  cienteColecao.innerHTML = ""
  clientes.forEach(function (cliente) {
    toyCollection.innerHTML += `
   <div class="card" data-id=${toy.id}>
        <h2>${toy.name}</h2>
        <img src="${toy.image}" class="toy-avatar" />
        <p>${toy.likes} Likes</p>
        <button class="like-btn">Like <3</button>
        <button class="delete-btn">Delete</button>
   </div>
  `
  })
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


document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById('ckb_profissao');
  var content = document.getElementById('group_profissao');

  checkbox.addEventListener('change', function () {
      // Check if the checkbox is checked
      if (checkbox.checked) {
          // Show content
          content.style.display = 'block';
      } else {
          // Hide content
          content.style.display = 'none';
      }
  });
});

/*
document.getElementById("icon-cadastro-cliente").onclick = function () {
  window.location.href = "http://localhost:3000/static/html/cliente/listar.html";
}

document.getElementById("ID_BOTAO").onclick = function () {
  location.href = "http://localhost:8081/clientes.html";
}

document.getElementById("ID_BOTAO").onclick = function () {
  location.href = "http://localhost:8081/clientes.html";
}
*/