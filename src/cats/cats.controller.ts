import {Body, Controller, Get, Post, Req} from '@nestjs/common';
import {CreateCatDto} from "./dto/create-cat.dto";
import {CatsService} from "./cats.service";
import {Cat} from "./interfaces/cats.interface";

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
