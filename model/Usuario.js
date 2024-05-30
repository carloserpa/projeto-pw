function Usuario(id, nome, email , telefone) {      
    this.id = id || null;    
    this.nome = nome || null;    
    this.email = email || null;    
    this.telefone = telefone || null;
    this.profissao = null;
}

Usuario.prototype.getId = function() {
    return this.id;
}

Usuario.prototype.setId = function(id) {
    return this.id = id;
}

Usuario.prototype.getNome = function() {
    return this.nome;
}

Usuario.prototype.setNome = function(nome) {
    return this.nome = nome;
}

Usuario.prototype.getEmail = function() {
    return this.email;
}

Usuario.prototype.setEmail = 
    function(email) {
        return this.email = email;
    }

Usuario.prototype.getTelefone = function() {
    return this.telefone;
}

Usuario.prototype.setTelefone = function(telefone) {
    return this.telefone = telefone;
}
Usuario.prototype.getProfissao = function() {
    return this.id;
}

Usuario.prototype.setProfissao = function(profissao) {
    return this.profissao = profissao;
}

module.exports = Usuario;     