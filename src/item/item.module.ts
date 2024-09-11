import { Module } from '@nestjs/common';
import { ItemsController } from './item.controller';
import { Itemservice } from './item.service';
@Module({
  controllers: [ItemsController],
  providers: [Itemservice],
})
export class ItemsModule {}