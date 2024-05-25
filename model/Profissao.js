function Profissao(id, descricao, ativo) {      
    this.id = id || null;    
    this.descricao = descricao || null;    
    this.ativo = ativo || null;    
}

Profissao.prototype.getId = function() {
    return this.id;
}

Profissao.prototype.setId = function(id) {
    return this.id = id;
}

Profissao.prototype.getDescricao = function() {
    return this.descricao;
}

Profissao.prototype.setDescricao = function(descricao) {
    return this.descricao = descricao;
}

Profissao.prototype.getAtvio = function() {
    return this.ativo;
}

Profissao.prototype.setAtvio = function(ativo) {
    return this.ativo = ativo;
}

module.exports = Profissao;     