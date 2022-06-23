import { Document } from "mongoose";



export interface IDesaparecido extends Document {
    readonly nombre: string;
    readonly residencia: string;
    readonly fechaDesaparicion: string;
    readonly descripcion: string;
    readonly edad: string;
    readonly sexo: string;
}