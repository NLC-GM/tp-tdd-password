const validarPassword = require('../src/validarPassword');

describe('Ciclo 1: Longitud mínima', () => {
    test('Debería ser invalida si tiene menos de 8 caracteres', () => {
        const resultado = validarPassword('12345');
        expect(resultado.esValida).toBe(false);
        expect(resultado.errores).toContain("Mínimo 8 caracteres");
    });
});
describe('ciclo 2: Mayúsculas', () => {
    test('Debería ser invalida si no tiene al menos una mayúscula', () => {
        const resultado = validarPassword('password123');
        expect(resultado.esValida).toBe(false);
        expect(resultado.errores).toContain("Contiene al menos 1 letra mayúscula.");
    });
});
describe('ciclo 3: Minúsculas', () => {
    test('Debería ser invalida si no tiene al menos una minúscula', () => {
        const resultado = validarPassword('MAYUSCULAS123');
        expect(resultado.esValida).toBe(false);
        expect(resultado.errores).toContain("Contiene al menos 1 letra minúscula.");
    });
});
describe('Ciclo 4: 1 numero al menos', () => {
    test('Debería ser invalida si no tiene al menos un número', () => {
        const resultado = validarPassword('Password');
        expect(resultado.esValida).toBe(false);
        expect(resultado.errores).toContain("Contiene al menos 1 número.");
    });
});
describe('Ciclo 5: caracteres especiales', () => {
    test('Debería ser invalida si no tiene al menos un carácter especial', () => {
        const resultado = validarPassword('Password123'); // No tiene símbolos
        expect(resultado.esValida).toBe(false);
        expect(resultado.errores).toContain("Contiene al menos 1 carácter especial.");
    });
});
describe('Ciclo 6: no contiene espacios', () => {
    test('Debería ser invalida si contiene espacios', () => {
        const resultado = validarPassword('Password 123!'); 
        expect(resultado.esValida).toBe(false);
        expect(resultado.errores).toContain("No debe contener espacios.");
    });
});
describe('Ciclo 7: Nombre de usuario', () => {
    test('Debería ser invalida si la contraseña contiene el nombre de usuario', () => {
        // Probamos con password que contiene "nelson" y username "nelson"
        const resultado = validarPassword('Nelson123!', 'nelson'); 
        expect(resultado.esValida).toBe(false);
        expect(resultado.errores).toContain("No puede contener el nombre de usuario.");
    });
});
describe('Regla 8: Caracteres consecutivos', () => {
    test('Debería ser invalida si tiene 3 letras iguales seguidas', () => {
        const resultado = validarPassword('Abc123aaa!');
        expect(resultado.esValida).toBe(false);
        expect(resultado.errores).toContain("No debe contener 3 o más caracteres iguales consecutivos.");
    });
});