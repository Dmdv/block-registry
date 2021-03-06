import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlocksModule } from './blocks/blocksModule';

@Module({
  imports: [
    BlocksModule,
    MongooseModule.forRoot('mongodb://localhost:27017/blocks'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
