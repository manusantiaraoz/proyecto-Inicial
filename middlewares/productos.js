const {esquemasP} = require('./esquemas/productos');

const validarProducto = (req, res, next) => {
    const {error, value} = esquemasP.Producto.validate(req.body);
    error ? res.render('createProductos', {message : error.details[0].message}) : next();
};

module.exports = {validarProducto}