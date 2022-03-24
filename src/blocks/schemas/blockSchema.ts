import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlockDocument = Block & Document;

@Schema()
export class Block {
  @Prop()
  title: string;

  @Prop()
  price: number;
}

export const BlockSchema = SchemaFactory.createForClass(Block);
