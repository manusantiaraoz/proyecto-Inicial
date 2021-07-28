const joi = require('@hapi/joi');

const esquemasP = {
    Producto: joi.object().keys({
        nombre: joi.string().required().messages({
            "string.empty": "falta nombre del prodcuto"
        }),
        descripcion: joi.string().required().messages({
            "string.empty" : "ingresa descripcion",   
        }),
        precio: joi.string().required().messages({
            "string.empty" : "sin precio no se vende",   
        }),
        stock: joi.string().required().messages({
            "string.empty" : "hay que saber cuantos quedan...",   
        }),
    }),  
}


module.exports = {esquemasP}