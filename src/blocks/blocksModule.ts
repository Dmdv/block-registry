import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlocksService } from './blocks.service';
import { BlocksController } from './blocksController';
import { Block, BlockSchema } from './schemas/blockSchema';

@Module({
  providers: [BlocksService],
  controllers: [BlocksController],
  imports: [
    MongooseModule.forFeature([{ name: Block.name, schema: BlockSchema }]),
  ],
})
export class BlocksModule {}
