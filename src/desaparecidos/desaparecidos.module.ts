import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {  DesaparecidoSchema } from './schema/desaparecido.schema';
import { DesaparecidosController } from './desaparecidos.controller';
import { DesaparecidosService } from './desaparecidos.service';

@Module({
    imports: [
       MongooseModule.forFeature([{ name: 'Desaparecido', schema: DesaparecidoSchema }]),
    ],
    controllers: [DesaparecidosController],
    providers: [DesaparecidosService],
})

export class DesaparecidosModule {

}
