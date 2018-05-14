import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelSchema } from './hotel.schema';
import { HotelController } from './hotel.controller';
import { HabitacionService } from 'habitacion/habitacion.service';
import { HotelService } from './hotel.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Hotel', schema: HotelSchema}])],
    controllers: [HotelController],
    components: [HotelService],
})
export class HotelModule {}