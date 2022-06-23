import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DesaparecidoDto } from './dto/DesaparecidoDto';
import { IDesaparecido } from './interfaces/desaparecido';

@Injectable()
export class DesaparecidosService {
    constructor( @InjectModel('Desaparecido') private readonly DesaparecidoModel : Model<IDesaparecido>,) {}

     async getAll() : Promise<IDesaparecido[]>{
        const desaparecidos = await this.DesaparecidoModel.find().exec();
        return desaparecidos;
    }

    async getOne(nombre : string) : Promise<IDesaparecido>{
        const desaparecido = await this.DesaparecidoModel.findOne({nombre}).exec();
        return desaparecido;
    }

    async postOne(createDesaparecido : DesaparecidoDto) : Promise<IDesaparecido> {
        const desaparecido = await this.DesaparecidoModel.create(createDesaparecido)
        desaparecido.save();
        return desaparecido;
    }
}
