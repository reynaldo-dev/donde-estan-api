import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PalabrasController } from './palabras.controller';
import { PalabrasService } from './palabras.service';
import { PalabrasSchema } from './schema/palabras.schema';

@Module({
    imports: [
     MongooseModule.forFeature([
         {
                name: 'Palabras',
                schema: PalabrasSchema
         }
     ]),
    ],
    controllers: [PalabrasController],
    providers: [PalabrasService],
})
export class PalabrasModule {}
