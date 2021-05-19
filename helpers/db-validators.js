const { Categoria } = require('../models');


const existeCategoriaPorId = async (id) => {

    const existeCategoria = await Categoria.findById(id);
    if (!existeCategoria) {
        throw new Error(`El id no existe ${id}`);
    }
}

const existeMateriaPorId = async (id) => {

    const existeMateria = await Materia.findById(id);
    if (!existeMateria) {
        throw new Error(`La materia con ID ${id} no existe`);
    }
}


module.exports = {
    existeCategoriaPorId,
    existeMateriaPorId
}

