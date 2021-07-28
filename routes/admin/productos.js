const express = require('express');
const router = express.Router();
const multer = require('multer');
const config = {dest:'./public/tmp'};
const upload = multer (config);
const model = require('./../../models/productos');
const { getC } = require('./../../models/categorias');
const {validarProducto} = require('./../../middlewares/productos');
const service = require ('./../../services/productos')



const get = async (req, res) => {
    const productos = await model.getAll();
    res.render('adminProductos', {
        productos
    });
}
const create = async (req, res) => {
    console.log(req.body, req.file);
    const idImg = await service.productoConImagen(req.body, req.file);
    res.redirect('/admin/productos')
}



const getCreate = async (req, res) => {
    const categorias = await getC()
    res.render('createProductos', {
        categorias
    })
}

const Modificar = async (req, res) => {
    console.log(req.body, req.file);
    const idImg = await service.modproducto(req.params.id, req.body, req.file);
    res.redirect('/admin/productos')
}

const vistaModificar = async (req, res) => {
    const {id} = req.params;
    const [producto] = await model.getSingle(id);
    const categorias = await getC();
    console.log (producto);
    res.render ('modificarProducto', {producto, categorias});
}
const delate = async (req, res) => {
    const {id} = req.params;
    const {insertId} = await model.del (id);
    const msgImagen = await model.delImg (id);
    console.log(insertId, msgImagen);
    res.redirect('/admin/productos'); 
  }

router.get('/', get);
router.get('/create', getCreate);
router.post('/create',upload.single("imagen"), create);
router.get ('/delate/:id', delate);
router.get ('/update/:id', vistaModificar);
router.post('/update/:id', upload.single("imagen"), Modificar);
module.exports = router;