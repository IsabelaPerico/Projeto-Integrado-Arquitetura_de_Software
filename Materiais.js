function registrarMaterial(nome, quantidade) {
    if (quantidade <= 0) {
        return "Erro: Quantidade inválida"; // Caminho [Não] do meu fluxograma
    }
    return "Sucesso: Material registrado"; // Caminho [Sim] do meu fluxograma
}

module.exports = registrarMaterial;