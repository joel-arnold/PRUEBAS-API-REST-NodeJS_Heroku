require('dotenv').config();
const { Servidor } = require('./models');

console.clear()

const servidor = new Servidor();

servidor.listen();