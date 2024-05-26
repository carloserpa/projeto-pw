const apiUrl = "http://localhost:3000";
/*
fetch('/api/profissaos/todos', {
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
    fetch('/api/profissaos/todos/${id}', {
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
    fetch('/api/profissaos/todos/${id}', {
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
      fetch('/api/profissoes/todos', {
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
              temp += "<td>" + itemData.descricao + "</td>";
              temp += "<td>" + itemData.ativo + "</td>";
              temp += "<td>";            
              temp += "<a id=\"btn_atualizar_profissao\" class=\"btn btn-dark\" href=\"#\" role=\"button\">Atualizar</a>";
              temp += "<a id=\"btn_deletar_profissao\" class=\"btn btn-dark\" href=\"#\" role=\"button\" onClick=\"remove("+ itemData.id +");\">Deletar</a>";
              temp += "</td></tr>";
            });
            document.getElementById('data').innerHTML = temp;
          }
          //window.location.reload();  
      }).catch(error => console.error('Error:', error)
      )
   //}
  });

/*
   #################################################################
   Adicionar evento ao componente se ele existir na pagina
   - Checkbox da pagina de cadastro /profissao/form.html
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
   - Botao da pagina de cadastro /profissao/form.html
   #################################################################
 */
var formCadastroProfissao = document.getElementById("form-cadastro-usuario");
//if(formCadastroProfissao == 'true'){
  formCadastroProfissao.addEventListener('submit', function(e){
    e.preventDefault()
   
    var descricaoProfissao=document.getElementById('descricaoProfissao').value
    var ativoProfissao=document.getElementById('ckbAtivoprofissao').value
   
    fetch('/api/profissoes/', {
     method: 'POST',
     body: JSON.stringify({
       descricao:descricaoProfissao,
       ativo:ativoProfissao,
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     }
     })
     .then(function(response){ 
        return response.json()})
     .then(function(data)
      {
        console.log(data);
        console.log(data.success);
        window.location.replace('http://localhost:3000/profissao/listar');
        return;
       
      //window.location.href = 'http://localhost:3000/profissao/listar';
    }).catch(error => console.error('Error:', error)); 
   });
//}

  /*
   #################################################################
   Adicionar evento ao componente se ele existir na pagina
   - Botao da pagina de cadastro /profissao/form.html
   #################################################################
 */
document.addEventListener('DOMContentLoaded', (event) =>  {  
  
});

function remove(id){
  fetch("/api/profissoes/deletar/" + id, {
    method: 'DELETE'
  }).then(() => {
     console.log('removed');
     window.location.reload();  
  }).catch(err => {
    console.error(err)
  });
}
