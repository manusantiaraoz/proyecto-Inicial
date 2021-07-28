const pool = require('../utils/bd');
const T_PRODUCTOS = "productos";
const T_CATEGORIAS = "categorias";
const T_productosImg = "productos_imagenes"

const getAll = async () => {
    const query = "SELECT p.id, p.nombre, p.descripcion, p.precio, p.stock, c.nombre AS nombreCategoria, ip.uid FROM ?? AS p JOIN ?? AS c ON p.id_categoria = c.id JOIN ?? as ip ON p.id = ip.id_producto WHERE p.eliminado = 0";
    const params = [T_PRODUCTOS, T_CATEGORIAS, T_productosImg]
    return await pool.query(query, params);
};

const getSingle = async (id) => {
    const query = "SELECT p.id, p.nombre, p.descripcion, p.precio, p.stock, p.id_categoria, c.nombre AS nombreCategoria, ip.uid FROM ?? AS p JOIN ?? AS c ON p.id_categoria = c.id JOIN ?? as ip ON p.id = ip.id_producto WHERE p.id = ? AND p.eliminado = 0"
    const params = [T_PRODUCTOS, T_CATEGORIAS,T_productosImg, id];
    return await pool.query(query, params);
};

const crearProducto = async (obj) => {
    const query = "INSERT INTO ?? SET ?"
    const params = [T_PRODUCTOS, obj];
    return await pool.query(query, params);
};


//LLAMADOS A LA BASE DE IMAGENES

const createImages = (obj) =>pool.query("INSERT INTO ?? SET ?", [T_productosImg, obj]).then(response =>response).catch(err => console.error(err));

const updateI = async(id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id_producto = ?";
    const params = [T_productosImg, obj, id];
    return await pool.query(query, params);
};
const delImg = async(id) =>{
    const query = "UPDATE ?? SET eliminado = 1 WHERE id_producto = ?";
    const params = [T_productosImg, id]
    return await pool.query(query, params);
};


//llamados de productos
const Update = async(id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [T_PRODUCTOS, obj, id];
    return await pool.query(query, params);
};

const del = async (id) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [T_PRODUCTOS, id]
    return await pool.query(query, params);
}
module.exports = {
    getAll,
    getSingle,
    crearProducto,
    Update,
    del,
    createImages,
    updateI,
    delImg
};