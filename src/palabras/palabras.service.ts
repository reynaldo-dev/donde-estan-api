import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPalabra } from './interfaces/palabras.interface';

@Injectable()
export class PalabrasService {
    constructor(@InjectModel('Palabras') private readonly PalabrasModel : Model<IPalabra>) {}

    async getAll() : Promise<IPalabra[]> {
       const palabras = await this.PalabrasModel.find();
       return palabras;
    }

    create(createDTO : IPalabra) : Promise<IPalabra> {
        const palabra = new this.PalabrasModel(createDTO);
        return palabra.save();
    }

}
