const { Materia } = require('../models');


const existeMateriaPorId = async (id) => {

    const existeMateria = await Materia.findById(id);
    if (!existeMateria) {
        throw new Error(`La materia con ID ${id} no existe`);
    }
}


module.exports = {
    existeMateriaPorId
}

