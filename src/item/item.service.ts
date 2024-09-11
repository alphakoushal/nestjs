import { Injectable } from '@nestjs/common';
import { CreateItemDto } from 'src/dto/create-item.dto';
import { UpdateItemDto } from 'src/dto/update-item.dto';
import { createDatabaseConnection } from 'src/models/connection';
@Injectable()
export class Itemservice {
    private connection;
    constructor() {
        this.initializeConnection();
      }
      private items = [];
      private async initializeConnection(){
        this.connection = await createDatabaseConnection();
      }
    create(createItemDto: CreateItemDto) { 
        const newItem = { ...createItemDto,id: Date.now(),description:`${createItemDto.description}${this.items.length}` };
        this.items.push(newItem);
        return newItem;
      }
      async findAll() {
        const [rows] = await this.connection.query('SELECT * FROM registeration');
        return rows;
      }
      async findOne(id: number) {
        const [rows] = await this.connection.query('SELECT * FROM registeration where user_id='+id);
        return rows;
      }
    
      update(id: number, updateItemDto: UpdateItemDto) {
        const itemIndex = this.items.findIndex(item => item.id === id);
        if (itemIndex > -1) {
          this.items[itemIndex] = { ...this.items[itemIndex], ...updateItemDto };
          return this.items[itemIndex];
        }
        return null;
      }
    
      remove(id: number) {
        const itemIndex = this.items.findIndex(item => item.id === id);
        if (itemIndex > -1) {
          const removedItem = this.items[itemIndex];
          this.items.splice(itemIndex, 1);
          return removedItem;
        }
        return null;
      }
}
