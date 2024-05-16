

const servicos = ['Reforma', 'Manutenção', 'Limpeza', 'Arquitetura', 'Engenharia', 'Paisagismo'];
const select = document.getElementById('servico');
servicos.forEach(servico => {
    const option = document.createElement('option');
    option.value = servico;
    option.textContent = servico;
    select.appendChild(option);
});

const profissoes = ['Pedreiro', 'Carpinteiro', 'Pintor', 'Eletricista', 'Encanador', 'Marceneiro', 'Serralheiro', 'Jardineiro', 'Piscineiro', 'Vidraceiro', 'Gesseiro', 'Decorador', 'Arquiteto', 'Engenheiro', 'Paisagista'];
const selectProfissao = document.getElementById('profissao');
profissoes.forEach(profissao => {
    const option = document.createElement('option');
    option.value = profissao;
    option.textContent = profissao;
    selectProfissao.appendChild(option);

});

const formSolicitacao = document.getElementById('form-solicitacao');

formSolicitacao.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Aqui você pode adicionar a lógica para validar o formulário e processar os dados

    // Após o processamento bem-sucedido do formulário, redirecione o usuário para a página de agradecimento
    window.location.href = 'C:\\workspace\\IPS\\2-Semestre\\ProgramacaoWeb\\Trabalho Projeto PW\\www\\agradecimento.html';
});