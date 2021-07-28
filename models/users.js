const pool =require('../utils/bd');
const T_USUARIOS = "usuarios"

const getAllUser = async() => {
    const query = "SELECT * FROM ?? WHERE eliminado = 0";
    const params = [T_USUARIOS]
    return await pool.query(query, params);
}

const getSingleUser = async(id) => {
    const query = "SELECT * FROM ?? WHERE id = ?"
    const params = [T_USUARIOS, id];
    return await pool.query(query, params);
}
const updateUser = async (id, obj)=> {
    const query = "UPDATE ?? SET ? WHERE id = ?"
    const params = [T_USUARIOS, obj, id];
    return await pool.query(query, params);
}

const crearUsuario = async (obj) => {
    const query = "INSERT INTO ?? SET ?"
    const params = [T_USUARIOS, obj];
    return await pool.query(query, params);
   }
   const veerify = async(uid) => {
       const query = "UPDATE ?? SET habilitado = 1 WHERE confirmacionCorreo = ?"
       const params = [T_USUARIOS, uid];
       return await pool.query(query, params);
   }
const entrar = async(username, pass) => {
    const query = "SELECT id, admin FROM ?? WHERE username = ? AND pass = ? AND habilitado = 1 AND eliminado = 0";
    const params = [T_USUARIOS, username, pass];
    return await pool.query(query, params);
}
module.exports = {getAllUser, getSingleUser, crearUsuario,veerify, entrar, updateUser};