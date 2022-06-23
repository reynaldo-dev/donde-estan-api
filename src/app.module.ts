import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DesaparecidosModule } from './desaparecidos/desaparecidos.module';
import { MongooseModule } from '@nestjs/mongoose';

import { PalabrasModule } from './palabras/palabras.module';
import { ConfigModule } from '@nestjs/config';
import { PruebasModule } from './pruebas/pruebas.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/donde-estan'),
    DesaparecidosModule,
    PalabrasModule,
    PruebasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
