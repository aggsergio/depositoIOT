const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    tarjeta: String,
    user: String,
    puesto: String,
    fecha: Date
});
module.exports = mongoose.model('IoT_proyecto', Valor);