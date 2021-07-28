const {crearProducto, createImages, Update, updateI} = require ('./../models/productos');
const {imgFilep} = require('./../utils/fileHandler');

const productoConImagen = async (body, file) => {
    try {
        const {insertId : id_producto} = await crearProducto(body);
        const uid = imgFilep(file);
        const obj = {id_producto, uid};
        const {insertId : idImg} = await createImages (obj);
        return idImg;
    } catch (error) {
        console.error (error);
    }
};
const modproducto = async (id, body, file) => {
    try {
        const id_producto = await Update(id,body);
        if (file){
            const [uid] = imgFilep(file);
            const obj = {uid};
            const idImg = await updateI(id, obj);
            return idImg;
        }
        else{
            return id_producto;
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {productoConImagen, modproducto }