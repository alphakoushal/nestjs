import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './item/item.module';
import { userModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [ItemsModule,userModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
