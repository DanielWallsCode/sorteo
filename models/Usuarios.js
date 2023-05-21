import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
    correo: {
        type: String,
        required: true,
        unique: true
    },

    contrasena: {
        type: String,
        required: true
    },
});

export default model('Usuario',usuarioSchema);