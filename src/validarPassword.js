const REGLAS_REGEX = {
    MAYUSCULA: /[A-Z]/,
    MINUSCULA: /[a-z]/,
    NUMERO: /\d/,
    TIENE_SIMBOLO: /[!@#$%^&*(),.?":{}|<>]/,
    TIENE_ESPACIOS: /\s/
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
    },
    {
        cumple: (pass) => REGLAS_REGEX.TIENE_SIMBOLO.test(pass),
        mensaje: "Contiene al menos 1 carácter especial."
    },
    {
        cumple: (pass) => !REGLAS_REGEX.TIENE_ESPACIOS.test(pass),
        mensaje: "No debe contener espacios."
    },
    { 
    cumple: (pass, username) => !username || !pass.toLowerCase().includes(username.toLowerCase()), 
    mensaje: "No puede contener el nombre de usuario." 
    }
];

function validarPassword(password, usernameOpcional) {
    const reglasIncumplidas = REGLAS.filter(regla => !regla.cumple(password, usernameOpcional));
    const errores = reglasIncumplidas.map(regla => regla.mensaje);
    return {
        esValida: errores.length === 0,
        errores: errores
    };
}

module.exports = validarPassword;