const express = require('express');
const router = express.Router();
const model = require ('./../models/users')


/*const allU = async (req, res) => {
  const usuarios = await model.getAllUser ();
  res.render('usuarios', {usuarios});
}
*/
const single = async (req, res) => {
  const [usuario] = await model.getSingleUser(req.session.user);
  console.log (usuario);
 res.render ('usuarios', {usuario});
}   

const edit = async(req, res) => {
  const nuevoUsuario = req.body;
  const {insertId} = await model.crearUsuario (nuevoUsuario);
  console.log (insertId);

}



router.get ('/', single);
router.post ('/edit/:id', edit);
module.exports = router;