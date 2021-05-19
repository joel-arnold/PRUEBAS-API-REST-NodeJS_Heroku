const { Schema, model } = require('mongoose');

const EsquemaMateria = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    }
});


EsquemaMateria.methods.toJSON = function () {
    const { __v, ...datos } = this.toObject();
    return datos;
}


module.exports = model('Materia', EsquemaMateria);
