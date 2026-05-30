const registrarMaterial = require('./materiais');

test('Deve registrar material com quantidade positiva', () => {
    expect(registrarMaterial("Cimento", 10)).toBe("Sucesso: Material registrado");
});

test('Deve barrar material com quantidade zero ou negativa', () => {
    expect(registrarMaterial("Areia", 0)).toBe("Erro: Quantidade inválida");
});