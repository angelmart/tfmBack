import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CadenaController } from './cadena.controller';
import { CadenaService } from './cadena.service';
import { CadenaSchema } from './cadena.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cadena', schema: CadenaSchema }])],
  controllers: [CadenaController],
  components: [CadenaService],
})
export class CadenaModule {}