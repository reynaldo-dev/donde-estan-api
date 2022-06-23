import { Body, Controller, Delete, Get, Param, Post, Put, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { DesaparecidosService } from './desaparecidos.service';
import { DesaparecidoDto } from './dto/DesaparecidoDto';


@Controller('desaparecidos')
export class DesaparecidosController {
    constructor(private  desaparecidosService: DesaparecidosService) {}

    @Get()
    async getAll(@Res() res: Response) {

        const desaparecidos = await this.desaparecidosService.getAll();
        if (!desaparecidos) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ ok: false, msg: 'No hay desaparecidos' });
        }
        return res.status(HttpStatus.OK).json({ ok: true, data: desaparecidos });
    }


    @Get('/:nombre')
    async getOne(@Param('nombre') nombre: string, @Res() res: Response) {
        const desaparecido = await this.desaparecidosService.getOne(nombre);
        if (!desaparecido) {
            return res.status(HttpStatus.BAD_REQUEST).json({ ok: false, msg: 'No se encontró el desaparecido' });
        }
        return res.status(HttpStatus.OK).json({ ok: true, data: desaparecido });
    }

    @Post()
    create(@Body() DesaparecidoDTO: DesaparecidoDto, @Res() res: Response) {
        const desaparecido = this.desaparecidosService.postOne(DesaparecidoDTO);
        if (!desaparecido) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ ok: false, msg: 'No se pudo crear el desaparecido' });
        }
        return res.status(HttpStatus.OK).json({ ok: true, desaparecido });
    }

    @Put()
    update(): string {
        return 'update desaparecidos'
    }

    @Delete()
    delete(): string {
        return 'delete desaparecidos'
    }
}
