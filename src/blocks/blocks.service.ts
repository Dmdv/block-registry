import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlockDto } from './dto/create-block.dto';
import { Block, BlockDocument } from './schemas/blockSchema';
import { UpdateBlockDto } from './dto/update-block.dto';

@Injectable()
export class BlocksService {
  constructor(
    @InjectModel(Block.name) private blockModel: Model<BlockDocument>,
  ) {}

  async getAll(): Promise<Block[]> {
    return this.blockModel.find().exec();
  }

  async getById(id: string): Promise<Block> {
    return this.blockModel.findById(id);
  }

  async create(blockDto: CreateBlockDto): Promise<Block> {
    const newBlock = new this.blockModel(blockDto);
    return newBlock.save();
  }

  async remove(id: string): Promise<Block> {
    return this.blockModel.findByIdAndRemove(id);
  }

  async update(id: string, blockDto: UpdateBlockDto): Promise<Block> {
    return this.blockModel.findByIdAndUpdate(id, blockDto, { new: true });
  }
}
