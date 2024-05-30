const apiUrl = "http://localhost:3000";

document.addEventListener('DOMContentLoaded', (event) =>  { 
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
  if(formCadastroUsuario){
    // Extract the user ID from the URL's query string
    const urlParams = new URLSearchParams(window.location.search);
    const usuarioId = urlParams.get('usuarioId')    
    if(usuarioId){      
      atualizar(usuarioId);
    } else {
      cadastrar();
    }
    
  }

function atualizar(usuarioId){
  preAtualizacao(usuarioId);
  formCadastroUsuario.addEventListener('submit', function(e){
    e.preventDefault()
  
  var nomeUsuario=document.getElementById('nomeUsuario').value;
  var emailUsuario=document.getElementById('emailUsuario').value;
  var telefoneUsuario=document.getElementById('telefoneUsuario').value;
  var profissaoUsuario=document.getElementById('batchSelect').value;
  console.log(profissaoUsuario);
 
  fetch('/api/usuarios/atualizar/'+ usuarioId, {
   method: 'PUT',
   body: JSON.stringify({
     id:usuarioId,
     nome:nomeUsuario,
     email:emailUsuario,
     telefone:telefoneUsuario,
     profissao:profissaoUsuario 
   }),
   headers: {
     'Content-type': 'application/json; charset=UTF-8',
   }
   })
   .then(function(response){ 
      return response.json()})
   .then(function(data)
    {
     console.log(data.success)
     window.location.replace('http://localhost:3000/usuario/listar');
     return;
  }).catch(error => console.error('Error:', error)); 
 });
}

function cadastrar(){
  formCadastroUsuario.addEventListener('submit', function(e){
    e.preventDefault()
  
  var nomeUsuario=document.getElementById('nomeUsuario').value;
  var emailUsuario=document.getElementById('emailUsuario').value;
  var telefoneUsuario=document.getElementById('telefoneUsuario').value;
  var profissaoUsuario=document.getElementById('batchSelect').value;
 
  fetch('/api/usuarios/cadastrar', {
   method: 'POST',
   body: JSON.stringify({
     nome:nomeUsuario,
     email:emailUsuario,
     telefone:telefoneUsuario,
     profissao:profissaoUsuario 
   }),
   headers: {
     'Content-type': 'application/json; charset=UTF-8',
   }
   })
   .then(function(response){ 
      return response.json()})
   .then(function(data)
    {
     console.log(data.success)
     window.location.replace('http://localhost:3000/usuario/listar');
     return;
  }).catch(error => console.error('Error:', error)); 
 });
}
  const batchTrack = document.getElementById("batchSelect");
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

  function preAtualizacao(id){
    var nomeUsuario=document.getElementById('nomeUsuario')
    var emailUsuario=document.getElementById('emailUsuario')
    var telefoneUsuario=document.getElementById('telefoneUsuario')
    var profissaoUsuario=document.getElementById('optionProfissao');
    
    fetch("/api/usuarios/buscar/" + id, {
      method: 'GET'
    }) .then(function(response){ 
      return response.json()})
    .then(function(data)
      {
        console.log( data.profissao.descricao);
        nomeUsuario.value = data.nome
        emailUsuario.value = data.email
        telefoneUsuario.value = data.telefone
        profissaoUsuario.value = data.profissao.id
        profissaoUsuario.text = data.profissao.descricao
    }).catch(error => console.error('Error:', error)); 
  }
  //end
  
});
