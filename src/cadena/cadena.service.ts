import { Component } from '@nestjs/common';
import { CadenaDto } from './cadena.dto';
import { Cadena } from './cadena.interface';
import { CadenaSchema } from './cadena.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Component()
export class CadenaService {
    constructor(@InjectModel(CadenaSchema) private readonly cadenaModel: Model<Cadena>) {}

    async create(cadenaDto: CadenaDto): Promise<Cadena> {
        const cadena = new this.cadenaModel(cadenaDto);
        return await cadena.save();
    }

    async findAll(): Promise<Cadena[]> {
        return await this.cadenaModel.find().exec();
    }
}