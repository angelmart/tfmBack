import * as mongoose from 'mongoose';

export const UsuarioSchema = new mongoose.Schema({
    usuario: String,
    password: String,
    email: String,
});