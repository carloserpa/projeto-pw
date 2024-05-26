const apiUrl = "http://localhost:3000";
/*
fetch('/api/usuarios/todos', {
     method: 'GET',
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     }
     })
     .then(function(response){ 
        return response.json()})
     .then(function(data)
      {
        console.log(data)
        if (data.length > 0) {

          var temp = "";
          data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.nome + "</td>";
            temp += "<td>" + itemData.email + "</td>";
            temp += "<td>" + itemData.telefone + "</td>";
            temp += "<td>";            
            temp += "<a class=\"btn btn-dark\" href=\"#\" role=\"button\">Atualizar</a>";
            temp += "<a class=\"btn btn-dark\" href=\"#\" role=\"button\">Deletar</a>";
            temp += "</td></tr>";
          });
          document.getElementById('data').innerHTML = temp;
        }
        //window.location.reload();  
    }).catch(error => console.error('Error:', error)
); 
  

const toyCollection = document.getElementById('toy-collection')
toyCollection.addEventListener('click', function (event) {
  let likeButtonIsPressed = event.target.className === "like-btn"
  let delButtonIsPressed = event.target.className === "delete-btn"
  
  if (likeButtonIsPressed) {
    let id = event.target.parentElement.dataset.id
    let like = event.target.previousElementSibling
    let likeCount = parseInt(event.target.previousElementSibling.innerText)
    like.innerText = '${++likeCount} likes'
    fetch('/api/usuarios/todos/${id}', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            likes: likeCount
          })
        })
        .then(response => response.json())
  }
  else if (delButtonIsPressed) {
    let id = event.target.parentElement.dataset.id
    fetch('/api/usuarios/todos/${id}', {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(fetchToys)
  }
});
*/

window.addEventListener("load", (event) => {

    var formTable = document.getElementById('form-table');
    //if(formTable == 'true'){
      fetch('/api/usuarios/todos', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
        })
        .then(function(response){ 
          return response.json()})
        .then(function(data)
        {
          console.log(data)
          if (data.length > 0) {

            var temp = "";
            data.forEach((itemData) => {
              temp += "<tr>";
              temp += "<td>" + itemData.id + "</td>";
              temp += "<td>" + itemData.nome + "</td>";
              temp += "<td>" + itemData.email + "</td>";
              temp += "<td>" + itemData.telefone + "</td>";
              temp += "<td>" + getProfissao(1) + "</td>";
              temp += "<td>";            
              temp += "<a id=\"btn_atualizar_usuario\" class=\"btn btn-dark\" href=\"#\" role=\"button\">Atualizar</a>";
              temp += "<a id=\"btn_deletar_usuario\" class=\"btn btn-dark\" href=\"#\" role=\"button\" onClick=\"remove("+ itemData.id +");\">Deletar</a>";
              temp += "</td></tr>";
            });
            document.getElementById('data').innerHTML = temp;
          }
          //window.location.reload();  
      }).catch(error => console.error('Error:', error)
      )
   //}
  });

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
        console.log("Valor: "+ data.descricao)
         return data.descricao;
        
      }).catch(error => console.error('Error:', error)
    )
   
  };


/*
   #################################################################
   Adicionar evento ao componente se ele existir na pagina
   - Checkbox da pagina de cadastro /usuario/form.html
   #################################################################
 */
   var checkbox = document.getElementById('ckb_profissao');
   var content = document.getElementById('group_profissao');
   if (checkbox == 'true') {
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
  }
  /*
   #################################################################
   Adicionar evento ao componente se ele existir na pagina
   - Botao da pagina de cadastro /usuario/form.html
   #################################################################
 */
var formCadastroUsuario = document.getElementById("form-cadastro-usuario");
if(formCadastroUsuario == 'true'){
  formCadastroUsuario.addEventListener('submit', function(e){
    e.preventDefault()
   
    var nomeUsuario=document.getElementById('nomeUsuario').value
    var emailUsuario=document.getElementById('emailUsuario').value
    var telefoneUsuario=document.getElementById('telefoneUsuario').value
   
    fetch('/api/usuarios/', {
     method: 'POST',
     body: JSON.stringify({
       nome:nomeUsuario,
       email:emailUsuario,
       telefone:telefoneUsuario 
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     }
     })
     .then(function(response){ 
        return response.json()})
     .then(function(data)
      {
       //console.log(data.success)
      //window.location.href = 'http://localhost:3000/usuario/listar';
    }).catch(error => console.error('Error:', error)); 
   });
}


const batchTrack = document.getElementById("batchSelect");
console.log({ batchTrack });
const getPost = async () => {
  const response = await fetch("/api/profissoes/todos");
  const data = await response.json();
  return data;
};

const displayOption = async () => {
  const options = await getPost();
  for (option of options) {
    const newOption = document.createElement("option");
    newOption.value = option.id;
    newOption.text = option.descricao;
    batchTrack.appendChild(newOption);
  }
};

displayOption();

function remove(id){
  fetch("/api/usuarios/deletar/" + id, {
    method: 'DELETE'
  }).then(() => {
     console.log('removed');
     window.location.reload();  
  }).catch(err => {
    console.error(err)
  });
}
/*

var btnDeletarUsuario = document.getElementById('btn_deletar_usuario');
btnDeletarUsuario.addEventListener('submit', (event) => {
  console.log('submit');
  let id = event.target.parentElement.dataset.id
    fetch('/api/usuarios/deletar/${id}', {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(fetchToys)
  });*/
  /*
   #################################################################
   Adicionar evento ao componente se ele existir na pagina
   - Botao da pagina de cadastro /usuario/form.html
   #################################################################
 */

document.addEventListener('DOMContentLoaded', (event) =>  {  
  
});
