import { Habitacion } from 'habitacion/habitacion.interface';

export class HotelDto{
    readonly nombre: string;
    readonly direccion: string;
    readonly director: string;
    readonly imagen: string;
    readonly listaHabitaciones: Habitacion[];
}