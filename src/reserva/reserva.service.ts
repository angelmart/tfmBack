import { Component } from '@nestjs/common';
import { ReservaDto } from './reserva.dto';
import { Reserva } from './reserva.interface';
import { ReservaSchema } from './reserva.schema';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {AuthService} from 'auth/auth.service';
import {UsuarioService} from "../usuario/usuario.service";
import {Usuario} from "../usuario/usuario.interface";

@Component()
export class ReservaService {
    constructor(@InjectModel(ReservaSchema) private readonly reservaModel: Model<Reserva>, private readonly usuarioService: UsuarioService) {}

    async create(reservaDto: ReservaDto, usuario: string): Promise<Reserva> {
        const usuarioDB: Usuario = await this.usuarioService.findByUsuario(usuario);
        reservaDto.usuario = usuarioDB;
        const reserva = new this.reservaModel(reservaDto);
        return await reserva.save();
    }

    async findAll(): Promise<Reserva[]> {
        const list: Reserva[] = await this.reservaModel.find();
        return list;
    }

    async findById(id: string): Promise<Reserva> {
        return await this.reservaModel.findById(id).exec();
    }

    async updatePayment(id: string): Promise<Reserva>{
        const condition = {_id : id};
        const update =  {abonada: true};
        return await this.reservaModel.update(condition, update);
    }
}