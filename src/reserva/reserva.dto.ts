import { Usuario } from 'usuario/usuario.interface';
import { Habitacion } from 'habitacion/habitacion.interface';

export class ReservaDto {
    readonly fechaEntrada: Date;
    readonly fechaSalida: Date;
    readonly precio: number;
    readonly abonada: boolean;
    readonly habitacion: Habitacion;
    usuario?: Usuario;
}