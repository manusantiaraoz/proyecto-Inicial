const pool = require('../utils/bd');
T_EMPLEADOS = "empleados";
T_EMPLEADOSIMG = "empleados_imagenes"

const create = (obj) => 
    pool.query("INSERT INTO ?? SET ?", [T_EMPLEADOS, obj]).then(response =>response).catch(err => console.error(err));

const createImages = (obj) =>pool.query("INSERT INTO ?? SET ?", [T_EMPLEADOSIMG, obj]).then(response =>response).catch(err => console.error(err));

const getAll = async() => {
    try {
        const query = "SELECT e.id, e.nombre, e.apellido, e.telefono, e.direccion, eI.uid AS uuid FROM ?? AS e JOIN ?? AS eI ON e.id = eI.id_empleado WHERE e.eliminado = 0";
        const params = [T_EMPLEADOS,T_EMPLEADOSIMG];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
};
const single = async(id) => {
        const query = "SELECT e.id, e.nombre, e.apellido, e.telefono, e.direccion, eI.uid AS uuid FROM ?? AS e JOIN ?? AS eI ON e.id = eI.id_empleado WHERE e.eliminado = 0 AND e.id = ?";
        const params = [T_EMPLEADOS,T_EMPLEADOSIMG, id];
        return await pool.query(query, params);
}

const updateE = async(id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [T_EMPLEADOS, obj, id];
    return await pool.query(query, params);
};

const updateI = async(id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id_empleado = ?";
    const params = [T_EMPLEADOSIMG, obj, id];
    return await pool.query(query, params);
};
const delE = async (id) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [T_EMPLEADOS, id]
    return await pool.query(query, params);
};

const delImg = async(id) =>{
    const query = "UPDATE ?? SET eliminado = 1 WHERE id_empleado = ?";
    const params = [T_EMPLEADOSIMG, id]
    return await pool.query(query, params);
};

module.exports = {create, createImages, getAll, updateE,delE, single, delImg, updateI}