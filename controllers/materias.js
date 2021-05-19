const { response } = require('express');
const { Materia } = require('../models');


const obtenerMaterias = async (req, res = response) => {

    const [total, materias] = await Promise.all([
        Materia.countDocuments(),
        Materia.find()
    ]);

    res.json({
        total,
        materias
    });
}

const obtenerMateria = async (req, res = response) => {

    const { id } = req.params;
    const materia = await Materia.findById(id)

    res.json(materia);

}

// const crearCategoria = async (req, res = response) => {

//     const nombre = req.body.nombre.toUpperCase();

//     const categoriaDB = await Categoria.findOne({ nombre });

//     if (categoriaDB) {
//         return res.status(400).json({
//             msg: `La categoria ${categoriaDB.nombre}, ya existe`
//         });
//     }

//     // Generar la data a guardar
//     const data = {
//         nombre
//     }

//     const categoria = new Categoria(data);

//     // Guardar DB
//     await categoria.save();

//     res.status(201).json(categoria);

// }

// const actualizarCategoria = async (req, res = response) => {

//     const { id } = req.params;
//     const { estado, usuario, ...data } = req.body;

//     data.nombre = data.nombre.toUpperCase();
//     data.usuario = req.usuario._id;

//     const categoria = await Categoria.findByIdAndUpdate(id, data, { new: true });

//     res.json(categoria);

// }

// const borrarCategoria = async (req, res = response) => {

//     const { id } = req.params;
//     const categoriaBorrada = await Categoria.findByIdAndUpdate(id, { estado: false }, { new: true });

//     res.json(categoriaBorrada);
// }

module.exports = {
    // crearCategoria,
    obtenerMaterias,
    obtenerMateria,
    // actualizarCategoria,
    // borrarCategoria
}