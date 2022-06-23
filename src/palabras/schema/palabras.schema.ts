import {Schema} from 'mongoose';


export const PalabrasSchema = new Schema({
    frase: { type: String, required: true }
})