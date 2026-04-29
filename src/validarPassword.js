const REGLAS = [
    {
        cumple: (pass) => pass.length >= 8,
        mensaje: "Mínimo 8 caracteres"
    },
    {
        cumple: (pass) => /[A-Z]/.test(pass), 
        mensaje: "Contiene al menos 1 letra mayúscula."
    },
    {
        cumple: (pass) => /[a-z]/.test(pass),
        mensaje: "Contiene al menos 1 letra minúscula."
    },
    {
        cumple: (pass) => /\d/.test(pass),
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