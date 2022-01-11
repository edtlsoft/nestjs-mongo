import { User } from './user.entity';
import { Product } from './../../products/entities/product.entity';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Order extends Document {
  date: Date;
  user: User;
  products: Product[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
