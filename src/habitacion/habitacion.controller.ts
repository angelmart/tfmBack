import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HabitacionDto } from './habitacion.dto';
import { Habitacion } from './habitacion.interface';
import { HabitacionService } from './habitacion.service';
import { TipoHabitacion } from 'habitacion/tipoHabitacion.enum';

@Controller(HabitacionController.URL)
export class HabitacionController {
    static URL: string = 'habitaciones';
    static ID: string = ':id';
    constructor(private readonly habitacionService: HabitacionService) {}

    @Post()
    async create(@Body() habitacionDto: HabitacionDto) {
        this.habitacionService.create(habitacionDto);
    }

    @Get()
    async findAll(): Promise<Habitacion[]> {
        return this.habitacionService.findAll();
    }

    @Get(HabitacionController.ID)
    async findOne(@Param() param): Promise<Habitacion[]> {
        return this.habitacionService.findById(param.id);
    }

    @Get('seedDB')
     seedDB(): void  {
        const dookie = require('dookie');
        const fs = require('fs');
        const yaml = require('js-yaml');
        const contents = fs.readFileSync('./src/seedDB.yml');
        const parsed = yaml.safeLoad(contents);
        const mongodbUri = 'mongodb://seed:seed@ds247499.mlab.com:47499/hotelporhoras';
        dookie.push(mongodbUri, parsed);
    }
}