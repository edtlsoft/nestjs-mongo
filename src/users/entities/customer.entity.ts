import { Skill, SkillSchema } from './skill.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Customer extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  phone: string;

  @Prop({ type: [SkillSchema] })
  skills: Skill;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
