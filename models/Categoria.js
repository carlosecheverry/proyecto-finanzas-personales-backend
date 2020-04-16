const mongoose = require('mongoose');

//Schemas

// const ObjectId = mongoose.Schema.Types.ObjectId;

const CategoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
});

const Categoria = mongoose.model('Categoria', CategoriaSchema);

module.exports = Categoria;