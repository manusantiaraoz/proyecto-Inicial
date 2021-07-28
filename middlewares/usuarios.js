const {esquemas} = require('./esquemas/usuarios');

const validarLogin = (req, res, next) => {
    const {error, value} = esquemas.login.validate(req.body);
    error ? res.json(error) : next();
};
const validarRegistro = (req, res, next) => {
    const {error, value} = schemas.registro.validate(req.body);
    error ? res.render('registro', {message : error.details[0].message}) : next();
}


module.exports ={validarLogin, validarRegistro}