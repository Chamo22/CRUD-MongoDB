const mongoose = require('mongoose');

const AlumnoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        unique: true,
        trim: true,
        },
    apellido: {
        type: String,
        required: [true, 'El apellido es requerido'],
        trim: true,
    },
    dni: {
        type: Number,
        required: [true, 'El DNI es requerido']
    },
    direccion: {
        type: String,
    },
    telefono: {
        type: String,
    },
    email: {
        type: String,
    },
    fecha_nacimiento: Date()
});