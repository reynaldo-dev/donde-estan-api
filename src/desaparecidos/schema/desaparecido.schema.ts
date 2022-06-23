import { Schema } from "mongoose";


export const DesaparecidoSchema = new Schema({

    nombre: {type: String, required: true},
    residencia: {type: String, required: true},
    fechaDesaparicion: {type: String, required: true},
    descripcion: {type: String, required: true},
    edad: {type: String, required: true},
    sexo: {type: String, required: true},
});

