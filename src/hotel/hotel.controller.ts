import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelDto } from './hotel.dto';
import { Hotel } from './hotel.interface';

@Controller(HotelController.URL)
export class HotelController {
    static URL: string = 'hoteles';
    static ID: string = ':id';
    constructor(private readonly hotelService: HotelService){}

    @Post()
    async create(@Body() hotelDto: HotelDto) {
        this.hotelService.create(hotelDto);
    }

    @Get(HotelController.ID)
    async findOne(@Param() param): Promise<Hotel[]> {
        return this.hotelService.findById(param.id);
    }

    @Get()
    async findAll(): Promise<Hotel[]> {
        return this.hotelService.findAll();
    }
}