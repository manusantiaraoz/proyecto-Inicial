const joi = require('@hapi/joi');

const esquemasC = {
    categorias: joi.object().keys({
        nombre: joi.string().required().messages({
            "string.empty": "ingresa nombre de la nueva categoria"
        }),
        descripcion: joi.string().required().messages({
            "string.empty" : "ingresa descripcion",   
        }),
    }),  
}


module.exports = {esquemasC}