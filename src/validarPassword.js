const REGLAS_REGEX = {
    MAYUSCULA: /[A-Z]/,
    MINUSCULA: /[a-z]/,
    NUMERO: /\d/
};

const REGLAS = [
    {
        cumple: (pass) => pass.length >= 8,
        mensaje: "Mínimo 8 caracteres"
    },
    {
        cumple: (pass) => REGLAS_REGEX.MAYUSCULA.test(pass), 
        mensaje: "Contiene al menos 1 letra mayúscula."
    },
    {
        cumple: (pass) => REGLAS_REGEX.MINUSCULA.test(pass),
        mensaje: "Contiene al menos 1 letra minúscula."
    },
    {
        cumple: (pass) => REGLAS_REGEX.NUMERO.test(pass),
        mensaje: "Contiene al menos 1 número."
    }
];

function validarPassword(password, usernameOpcional) {
    const reglasIncumplidas = REGLAS.filter(regla => !regla.cumple(password));
    const errores = reglasIncumplidas.map(regla => regla.mensaje);
    return {
        esValida: errores.length === 0,
        errores: errores
    };
}

module.exports = validarPassword;