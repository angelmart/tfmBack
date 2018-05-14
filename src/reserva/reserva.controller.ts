import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { ReservaDto } from './reserva.dto';
import { Reserva } from './reserva.interface';
import { ReservaService } from './reserva.service';
import {AuthService} from 'auth/auth.service';

@Controller(ReservaController.URL)
export class ReservaController {
    static URL: string = 'reservas';
    static ID: string = ':id';
    constructor(private readonly reservaService: ReservaService, private readonly authService: AuthService) {}

    @Post()
    async create(@Headers() headers, @Body() reservaDto: ReservaDto): Promise<Reserva> {
        const token: string = headers.authorization;
        const usuario: string = await this.authService.getUserValidatedFromToken(token);
        if (usuario) {
            return this.reservaService.create(reservaDto, usuario);
        } else {
            return null;
        }
    }

    @Get()
    async findAll(): Promise<Reserva[]> {
        return this.reservaService.findAll();
    }

    @Get(ReservaController.ID)
    async findOne(@Param() param): Promise<Reserva> {
        return this.reservaService.findById(param.id);
    }

    @Patch(ReservaController.ID)
    async updatePayment(@Headers() headers, @Param() param): Promise<Reserva> {
        return this.reservaService.updatePayment(param.id);
    }
}