const {esquemasC} = require('./esquemas/categorias');

const validarcategoria = (req, res, next) => {
    const {error, value} = esquemasC.categorias.validate(req.body);
    error ? res.render('createC', {message : error.details[0].message}) : next();
};

module.exports = {validarcategoria}