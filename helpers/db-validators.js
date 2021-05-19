const { Categoria } = require('../models');

/**
 * Categorias
 */
const existeCategoriaPorId = async (id) => {

    // Verificar si el correo existe
    const existeCategoria = await Categoria.findById(id);
    if (!existeCategoria) {
        throw new Error(`El id no existe ${id}`);
    }
}


module.exports = {
    existeCategoriaPorId
}

