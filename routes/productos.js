const express = require('express');
const router = express.Router();
const {getAll, getSingle, crearProducto} = require('./../models/productos');

const all = async (req, res) => {
    const productos = await getAll();
    res.render('productos', {productos});
}

const single = async (req, res) => {
    const {id} = req.params;
    const [producto] = await getSingle(id);
   res.render ('producto', {producto});    
}


router.get ('/', all);
router.get ('/single/:id', single);
module.exports = router;