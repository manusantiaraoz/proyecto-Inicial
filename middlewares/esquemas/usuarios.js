const joi = require('@hapi/joi');

const esquemas = {
    login: joi.object().keys({
        username: joi.string().required().messages({
            "string.empty": "El nombre de usuario es obligatorio"
        }),
        pass: joi.string().min(3).max(15).required().messages({
            "string.empty" : "La contraseña obligatoria",
            "string.min" : "pocos caracteres (3 minimos)",
            "string.max" : "te pasaste (15 maximos)"
        })
    }),
    registro: joi.object().keys({
        username: joi.string().required(),
        pass: joi.string().min(3).max(20).required(),
        mail: joi.string().required(),
        celular: joi.number().required(),
    })    
}


module.exports = {esquemas}