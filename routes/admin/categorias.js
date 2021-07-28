const express = require('express');
const { resolveContent } = require('nodemailer/lib/shared');
const router = express.Router();
const {getC, crearC, delC} = require('./../../models/categorias')
const {validarcategoria} = require('./../../middlewares/categorias')


 const getCategorias = async (req, res) => {
    const Categorias = await getC();
      res.render('adminCategorias', {Categorias})
 };


const categorias = async(req, res) => {
  const nuevaCategoria = req.body;
  const {insertId} = await crearC (nuevaCategoria);
  console.log (insertId);
  res.redirect('/admin/categorias')
}

const showC = (req, res)=>{
  res.render('createC');
}
const borrado = async (req, res) => {
  const {id} = req.params;
  const {insertId} = await delC (id);
  console.log(insertId);
  res.redirect('/admin/categorias'); 
}


router.get('/', getCategorias);
router.get ('/create', showC);
router.post ('/create',validarcategoria, categorias);
router.get ('/delate/:id', borrado);
module.exports = router;