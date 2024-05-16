function Servico(profissao, tipoDeServico, desejaOrcamento, descricaoServico, valorProposta ) {      
    this.profissao = tipoDeServico || null;
    this.profissao  = profissao  || null;
}

Servico.prototype.getProfissao = function() {
    return this.profissao;
}

Servico.prototype.setProfissao = function(profissao) {
    this.profissao = profissao;
}

Servico.prototype.getTipoDeServico = function() {
    return this.tipoDeServico;
}

Servico.prototype.setTipoDeServico = function(tipoDeServico) {
     this.tipoDeServico = tipoDeServico;
}

Servico.prototype.getDesejaOrcamento = function() {
    return this.desejaOrcamento;
}

Servico.prototype.setDesejaOrcamento = function(desejaOrcamento) {
     this.desejaOrcamento = desejaOrcamento;
}

Servico.prototype.setDescricaoServico = function(descricaoServico) {
    this.descricaoServico = descricaoServico;
}

Servico.prototype.getDescricaoServico = function() {
    return this.descricaoServico;
}

Servico.prototype.getValorProposta = function() {
    return this.valorProposta;
}

Servico.prototype.setValorProposta = function(valorProposta) {
    return this.valorProposta = valorProposta;
}

module.exports = Servico;     