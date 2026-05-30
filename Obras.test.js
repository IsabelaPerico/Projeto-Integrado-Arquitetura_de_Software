const cadastrarObra = require('./obras');

test('Deve cadastrar obra com todos os dados', () => {
    expect(cadastrarObra("Edifício Alpha", "Rua 10")).toBe("Sucesso: Obra cadastrada");
});

test('Deve dar erro se o nome da obra estiver vazio', () => {
    expect(cadastrarObra("", "Rua 10")).toBe("Erro: Preencha todos os campos");
});