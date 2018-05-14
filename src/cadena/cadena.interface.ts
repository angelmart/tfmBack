import { Document } from 'mongoose';

export interface Cadena extends Document {
    readonly nombre: string;
}