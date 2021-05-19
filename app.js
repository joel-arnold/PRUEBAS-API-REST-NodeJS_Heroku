require('dotenv').config();
const { Servidor } = require('./modelos');

console.clear()

const servidor = new Servidor();

servidor.escuchar();