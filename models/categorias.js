const pool = require('../utils/bd');
T_CATEGORIAS = "categorias";

const getC = async () => {
    const query = "SELECT * FROM ?? WHERE eliminado = 0";
    const params = [T_CATEGORIAS]
    return await pool.query(query, params);
};

const crearC = async (obj) => {
    const query = "INSERT INTO ?? SET ?"
    const params = [T_CATEGORIAS, obj];
    return await pool.query(query, params);
};
const delC = async (id) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?"
    const params = [T_CATEGORIAS, id];
    return await pool.query(query, params);

};

module.exports = {
    getC,
    crearC,
    delC
}