import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { PalabrasDTO } from './dto/palabras.dto';
import { PalabrasService } from './palabras.service';

@Controller('palabras')
export class PalabrasController {
    constructor(private readonly palabrasService: PalabrasService){}
    
  @Get()
  async getAll(@Res() res: Response) {
    const palabras = await this.palabrasService.getAll();
    if (!palabras) {
      res.status(HttpStatus.NOT_FOUND).json({ ok: false, msg: 'No se encontraron frases para la familia de un desaparecido' });
    }
    return res.status(HttpStatus.OK).json({ ok: true, palabras });
  }

  @Post()
  async create(@Body() createDTO: PalabrasDTO, @Res() res: Response) {
    const palabra = await this.palabrasService.create(createDTO);
    if (!palabra) {
      res.status(HttpStatus.BAD_REQUEST).json({ ok: false, msg: 'No creó la frase' });
    }
    return res.status(HttpStatus.OK).json({ ok: true, palabra });

  }
}
