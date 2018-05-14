import { TipoHabitacion } from './tipoHabitacion.enum';

export class HabitacionDto {
    readonly servicios: string[];
    readonly precioHora: number;
    readonly imagen: string;
    readonly tipoHabitacion: TipoHabitacion;
}