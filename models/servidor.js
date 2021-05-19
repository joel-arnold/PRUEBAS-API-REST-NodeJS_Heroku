const express = require('express');
const cors = require('cors');

const { conexionBD } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            categorias: '/api/categorias',
            materias: '/api/materias'
        }


        // Conectar a base de datos
        this.conectarBD();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarBD() {
        await conexionBD();
    }


    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio Público
        this.app.use(express.static('publico'));

    }

    routes() {
        this.app.use(this.paths.categorias, require('../routes/categorias'));
        this.app.use(this.paths.materias, require('../routes/materias'));
    }

    escuchar() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}




module.exports = Server;
