import { IsNotEmpty, IsArray, IsMongoId, IsDateString } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  readonly date: string;

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty()
  readonly customer: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  readonly products: string[];
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
