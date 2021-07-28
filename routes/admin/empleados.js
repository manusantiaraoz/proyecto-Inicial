const express = require ('express');
const router = express.Router();
const multer = require('multer');
const config = {dest: `./public/tmp`};
const upload = multer(config);
const service = require('./../../services/empleados');
const model = require ('./../../models/empleados');


const mostrarCreate = (req, res) =>{
    res.render('crearEmpleados')
};

const create = async (req, res) => {
    console.log(req.body, req.file);
    const idImg = await service.createEmpleado(req.body, req.file);
    console.log (idImg)
    res.redirect('/admin/empleados');
};

const getAll = async (req,res) =>{
    const empleados = await model.getAll();
    res.render('adminEmpleados', {empleados})
};
const delate = async (req, res) => {
    const {id} = req.params;
    const msgEmpleados = await model.delE (id);
    const msgImagen = await model.delImg (id);
    console.log(msgEmpleados, msgEmpleados);
    res.redirect('/admin/empleados'); 
  }
  const Modificarempleado = async (req, res) => {
    console.log(req.body, req.file);
    const idImg = await service.modEmpleado(req.params.id, req.body, req.file);
    console.log(idImg);
    res.redirect('/admin/empleados');
}

const vistaModificar = async (req, res) => {
    const {id} = req.params;
    const [empleado] = await model.single(id);
    console.log(empleado);
    res.render ('modificarEmpleado', {empleado});
}



router.get ('/create',mostrarCreate);
router.post('/create', upload.single("imagen"), create);
router.get ('/', getAll);
router.get ('/delate/:id', delate);
router.get ('/update/:id', vistaModificar);
router.post('/update/:id', upload.single("imagen"), Modificarempleado);
module.exports = router;