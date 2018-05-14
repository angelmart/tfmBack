import { Habitacion } from 'habitacion/habitacion.interface';

export interface Hotel extends Document{
    readonly nombre: string;
    readonly direccion: string;
    readonly director: string;
    readonly imagen: string;
    readonly listaHabitaciones: Habitacion[];
}