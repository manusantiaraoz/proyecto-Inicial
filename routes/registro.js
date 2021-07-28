const express = require ('express');
const router = express.Router();
const {crearUsuario, veerify} = require ('./../models/users')
const sha1 = require('sha1');
const {v4: uuid} = require('uuid');
const {send} = require('./../services/mail');
const {validarRegistro} = require ('./../middlewares/usuarios')

const showRegistro = (req,res) => {
    res.render ('registro');
}

const create = async(req, res) => {
    const usuario = req.body;
    const uid = uuid();
    const usuarioFinal ={
        username: usuario.username,
        pass: sha1(usuario.pass),
        mail: usuario.mail,
        confirmacionCorreo: uid,
        celular: usuario.celular,
    }
    const agregado = await crearUsuario (usuarioFinal);
    send ({mail: usuarioFinal.mail,
        cuerpo: 
    `<h1> Bienvenid@ ${usuarioFinal.username} a nuestra familia. Santi Araoz Distribuidora </h1> 
            <a href="http://localhost:3000/registro/verify/${uid}"> Confirmá tu registro</a>`});
        res.redirect('/productos');
  }
  
  const verificacion = async (req, res) =>{
      const {uid} = req.params;
      console.log(uid);
      const messageId = await veerify(uid);
      res.redirect ('/productos');
  }

router.get('/', showRegistro);
router.post ('/',validarRegistro,create);
router.get ('/verify/:uid',verificacion);
module.exports = router;