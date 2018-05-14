import * as mongoose from 'mongoose';

export const ReservaSchema = new mongoose.Schema({
    fechaEntrada: Date,
    fechaSalida: Date,
    precio: Number,
    abonada: Boolean,
    habitacion: { type: mongoose.Schema.Types.Mixed, ref: 'Habitacion' },
    usuario: { type: mongoose.Schema.Types.Mixed, ref: 'Usuario' },
    
});