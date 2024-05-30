const apiUrl = "http://localhost:3000";

document.addEventListener('DOMContentLoaded', (event) =>  {  
  /*
  #################################################################
  Adicionar evento ao componente se ele existir na pagina
  - Botao da pagina de cadastro /profissao/form.html
  #################################################################
  */ 
  var formCadastroProfissao = document.getElementById("form-cadastro-usuario");
  if(formCadastroProfissao){
    // Extract the user ID from the URL's query string
    const urlParams = new URLSearchParams(window.location.search);
    const profissaoId = urlParams.get('profissaoId')
    console.log(profissaoId)

    if(profissaoId){
      atualizar(profissaoId);
    } else {
      cadastrar();
    }
  }

  /*
  #################################################################
  - Função Cadastrar
  #################################################################
  */ 
function cadastrar() {
  formCadastroProfissao.addEventListener('submit', function(e){
    e.preventDefault()
  
    var descricaoProfissao=document.getElementById('descricaoProfissao').value
    var ativoProfissao=document.getElementById('ckbAtivoprofissao').value
  
    fetch('/api/profissoes/cadastrar', {
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
  })
}  

  /*
  #################################################################
  - Função Atualizar
  #################################################################
  */ 
function atualizar(profissaoId) {
  preAtualizacao(profissaoId);
  formCadastroProfissao.addEventListener('submit', function(e){
    e.preventDefault()
  
    var descricaoProfissao=document.getElementById('descricaoProfissao').value
    var ativoProfissao=document.getElementById('ckbAtivoprofissao').checked
    console.log(ativoProfissao);
  
    fetch('/api/profissoes/atualizar/' + profissaoId, {
    method: 'PUT',
    body: JSON.stringify({
      id:profissaoId,
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
    }).catch(error => console.error('Error:', error)); 
  });
}

/*
   #################################################################
   Adicionar evento ao componente se ele existir na pagina
   - Checkbox da pagina de cadastro /profissao/form.html
   #################################################################
 */
   var checkbox = document.getElementById('ckb_profissao');
   var content = document.getElementById('group_profissao');
   if (checkbox) {
     checkbox.addEventListener('change', function () {
         // Marca se o checkbox is checked
         if (checkbox.checked) {
             // Mostra conteúdo
             content.style.display = 'block';
         } else {
             // Esconde conteúdo
             content.style.display = 'none';
         }
       });
  }

  /*
  #################################################################
  - Função Pre atualização
  #################################################################
  */ 
  function preAtualizacao(id){
    var descricaoProfissao=document.getElementById('descricaoProfissao');
    var ativoProfissao=document.getElementById('ckbAtivoprofissao');
    console.log(descricaoProfissao)
    
    fetch("/api/profissoes/buscar/" + id, {
      method: 'GET'
    }) .then(function(response){ 
      return response.json()})
    .then(function(data)
      {
        console.log( data.descricao);
        descricaoProfissao.value = data.descricao;
        ativoProfissao.checked = true;
    }).catch(error => console.error('Error:', error)); 
  }
  //end
});

