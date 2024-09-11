import { Controller, Post, Body,Patch,Delete, Param ,Get} from '@nestjs/common';
import { Itemservice } from './item.service';
import { CreateItemDto } from 'src/dto/create-item.dto';
import { UpdateItemDto } from 'src/dto/update-item.dto';

@Controller({ host: 'localhost',path:'items' })
export class ItemsController {
    constructor(private readonly itemsService:Itemservice){}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }
  @Post('find')
  findAll() {
    return this.itemsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id:string) {
    return this.itemsService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }
}