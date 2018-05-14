import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CadenaDto } from './cadena.dto';
import { Cadena } from './cadena.interface';
import { CadenaService } from './cadena.service';

@Controller(CadenaController.URL)
export class CadenaController {
    static URL: string = 'cadenas';
    constructor(private readonly cadenaService: CadenaService) {}

    @Post()
    async create(@Body() cadenaDto: CadenaDto) {
        this.cadenaService.create(cadenaDto);
    }

    @Get()
    async findAll(): Promise<Cadena[]> {
        return this.cadenaService.findAll();
    }
}