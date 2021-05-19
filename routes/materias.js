const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares');

const {
    obtenerMateria,
    obtenerMaterias
} = require('../controllers/materias');
const { existeMateriaPorId } = require('../helpers/db-validators');

const router = Router();


router.get('/', obtenerMaterias);

router.get('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeMateriaPorId),
    validarCampos,
], obtenerMateria);

// // Crear categoria - privado - cualquier persona con un token válido
// router.post('/', [
//     check('nombre', 'El nombre es obligatorio').not().isEmpty(),
//     validarCampos
// ], crearCategoria);

// // Actualizar - privado - cualquiera con token válido
// router.put('/:id', [
//     check('nombre', 'El nombre es obligatorio').not().isEmpty(),
//     check('id').custom(existeCategoriaPorId),
//     validarCampos
// ], actualizarCategoria);

// Borrar una categoria - Admin
// router.delete('/:id', [
//     check('id', 'No es un id de Mongo válido').isMongoId(),
//     check('id').custom(existeCategoriaPorId),
//     validarCampos,
// ], borrarCategoria);


module.exports = router;