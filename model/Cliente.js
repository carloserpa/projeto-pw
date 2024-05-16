function Cliente(nome, email , telefone) {      
    this.nome = nome || null;    
    this.email = email || null;    
    this.telefone = telefone || null;    
}

Cliente.prototype.getNome = function() {
    return this.nome;
}

Cliente.prototype.setNome = function(nome) {
    return this.nome = nome;
}

Cliente.prototype.getEmail = function() {
    return this.email;
}

Cliente.prototype.setEmail = function(email) {
    return this.email = email;
}

Cliente.prototype.getTelefone = function() {
    return this.telefone;
}

Cliente.prototype.setTelefone = function(telefone) {
    return this.telefone = telefone;
}


module.exports = Cliente;     