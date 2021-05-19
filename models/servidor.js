const express = require('express');
const cors = require('cors');

const { conexionBD } = require('../database/config');

class Servidor {

    constructor() {
        this.aplicacion = express();
        this.puerto = process.env.PORT;

        this.directorios = {
            materias: '/api/materias'
        }


        // Conectar a base de datos
        this.conectarBD();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.rutas();
    }

    async conectarBD() {
        await conexionBD();
    }


    middlewares() {

        // CORS
        this.aplicacion.use(cors());

        // Lectura y parseo del body
        this.aplicacion.use(express.json());

        // Directorio Público
        this.aplicacion.use(express.static('directorio_publico'));

    }

    rutas() {
        this.aplicacion.use(this.directorios.materias, require('../routes/materias'));
    }

    escuchar() {
        this.aplicacion.listen(this.puerto, () => {
            console.log('Servidor corriendo en puerto', this.puerto);
        });
    }

}




module.exports = Servidor;
