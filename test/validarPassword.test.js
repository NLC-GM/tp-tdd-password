const validarPassword = require('../src/validarPassword');

describe('Ciclo 1: Longitud mínima', () => {
    test('Debería ser invalida si tiene menos de 8 caracteres', () => {
        const resultado = validarPassword('12345');
        expect(resultado.esValida).toBe(false);
        expect(resultado.errores).toContain("Mínimo 8 caracteres");
    });
});