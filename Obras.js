function cadastrarObra(nome, endereco) {
    if (!nome || !endereco) {
        return "Erro: Preencha todos os campos"; // Caminho [Não]
    }
    return "Sucesso: Obra cadastrada"; // Caminho [Sim]
}

module.exports = cadastrarObra;