import * as mongoose from 'mongoose';

export const CadenaSchema = mongoose.Schema({
    nombre: String,
    listaHotel: [{ type: mongoose.Schema.ObjectId, ref: 'Hotel' }],
});