import { Document } from 'mongoose';
import { Usuario } from 'usuario/usuario.interface';
import { Habitacion } from 'habitacion/habitacion.interface';

export interface Reserva extends Document {
    readonly fechaEntrada: Date;
    readonly fechaSalida: Date;
    readonly precio: number;
    readonly abonada: boolean;
    readonly habitacion: Habitacion;
    readonly usuario: Usuario;
    
}