const mongoose = require('mongoose');

const GastosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    monto: {
        type: Number,
        required: true,
    },
    descripcion: {
        type: String, 
        required: true,
    }, {
    timestamps: true,
});

const Gasto = mongoose.model('Gasto', GastoSchema);

module.exports = Gasto;