const {create, createImages, updateE, updateI} = require ('./../models/empleados');
const {imgFile} = require('./../utils/fileHandler');

const createEmpleado = async (body, file) => {
    try {
        const {insertId : id_empleado} = await create(body);
        const uid = imgFile(file);
        const obj = {id_empleado, uid};
        const {insertId : idImg} = await createImages (obj);
        return idImg;
    } catch (error) {
        console.error (error);
    }
};

const modEmpleado = async (id, body, file) => {
    try {
        const id_empleado = await updateE(id,body);
        if (file){
            const uid = imgFile(file);
            const obj = {uid};
            const idImg = await updateI(id, obj);
            return idImg;
        }
        else{
            return id_empleado;
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {createEmpleado, modEmpleado}