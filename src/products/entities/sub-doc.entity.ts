import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class SubDoc {
  @Prop()
  name: string;

  @Prop()
  image: string;
}

export const SubDocSchema = SchemaFactory.createForClass(SubDoc);
