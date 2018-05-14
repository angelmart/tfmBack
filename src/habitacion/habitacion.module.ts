import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HabitacionController } from './habitacion.controller';
import { HabitacionService } from './habitacion.service';
import { HabitacionSchema } from './habitacion.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Habitacion', schema: HabitacionSchema }])],
  controllers: [HabitacionController],
  components: [HabitacionService],
})
export class HabitacionModule {}