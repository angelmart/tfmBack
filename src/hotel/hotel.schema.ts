import * as mongoose from 'mongoose';

export const HotelSchema = new mongoose.Schema({
    nombre: String,
    direccion: String,
    director: String,
    imagen: String,
    listaHabitaciones: [{ type: mongoose.Schema.ObjectId, ref: 'Habitacion' }],
});