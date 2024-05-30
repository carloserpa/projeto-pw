const apiUrl = "http://localhost:3000";


document.addEventListener('DOMContentLoaded', (event) =>  {  
      /*
    #################################################################
    Adicionar evento ao componente se ele existir na pagina
    - Botao da pagina de cadastro /profissao/form.html
    #################################################################
    */  
    var tableBody = document.getElementById('data');
    if(tableBody){
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
              var row = document.createElement('tr');
            
            var celulaId = document.createElement('td');
            celulaId.appendChild(document.createTextNode(itemData.id));
            row.appendChild(celulaId);
            
            var celulaDescricao = document.createElement('td');
            celulaDescricao.appendChild(document.createTextNode(itemData.nome));
            row.appendChild(celulaDescricao);
            
            var celulaEmail = document.createElement('td');
            celulaEmail.appendChild(document.createTextNode(itemData.email));
            row.appendChild(celulaEmail);
            
            var celulatelefone = document.createElement('td');
            celulatelefone.appendChild(document.createTextNode(itemData.telefone));
            row.appendChild(celulatelefone);

            var celulaProfissao = document.createElement('td');
            celulaProfissao.appendChild(document.createTextNode(itemData.profissao.descricao));
            row.appendChild(celulaProfissao);

            var celulaAcoes = document.createElement('td');
            var link=document.createElement("a");
            link.appendChild(document.createTextNode("Atualizar"));
            link.setAttribute("class","btn btn-dark me-1");
            link.setAttribute("role", "button");
            link.href = '/usuario/atualizar?usuarioId=' + itemData.profissao.id;
            link.addEventListener("click",  function () {
              preAtualizacao(itemData.id);
            });
            celulaAcoes.appendChild(link)

            var link=document.createElement("a");
            link.appendChild(document.createTextNode("Deletar"));
            link.setAttribute("class","btn btn-dark");
            link.setAttribute("role", "button");
            link.href = '#';
            link.addEventListener("click",  function () {
              remove(itemData.id);
            });
            celulaAcoes.appendChild(link)
            row.appendChild(celulaAcoes);

            tableBody.appendChild(row);            
            });
          }
          //window.location.reload();  
      }).catch(error => console.error('Error:', error)
      )
   }
/*
   #################################################################
   - Funções
   #################################################################
 */
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
});
