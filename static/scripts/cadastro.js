// Arquivo cadastro.js

document.addEventListener('DOMContentLoaded', function() {
    const formCadastro = document.getElementById('form-cadastro-cliente');

    formCadastro.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Validar os campos do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;

        if (nome === '' || email === '' || telefone === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        // Se todos os campos estiverem preenchidos, redirecionar para a próxima página
        window.location.href = 'C:\\workspace\\IPS\\2-Semestre\\ProgramacaoWeb\\Trabalho Projeto PW\\www\\index.html';
    });
});
