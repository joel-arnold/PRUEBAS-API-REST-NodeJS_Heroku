const mongoose = require('mongoose');



const conexionBD = async () => {

    try {

        await mongoose.connect(process.env.CADENA_CONEX_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Base de datos online');

    } catch (error) {

        // TODO Habilitar si es necesario detectar errores en BD
        // console.log(error);

        throw new Error('Error a la hora de iniciar la base de datos');
    }


}



module.exports = {
    conexionBD
}
