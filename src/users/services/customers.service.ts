import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  findAll() {
    return this.customerModel.find().exec();
  }

  async findOne(id: number) {
    const customer = await this.customerModel.findById(id).exec();
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  create(data: CreateCustomerDto) {
    console.log(data);
    const newCustomer = new this.customerModel(data);
    return newCustomer.save();
  }

  // update(id: number, changes: UpdateCustomerDto) {
  //   const customer = this.findOne(id);
  //   const index = this.customerModel.findIndex((item) => item.id === id);
  //   this.customerModel[index] = {
  //     ...customer,
  //     ...changes,
  //   };
  //   return this.customerModel[index];
  // }

  // remove(id: number) {
  //   const index = this.customerModel.findIndex((item) => item.id === id);
  //   if (index === -1) {
  //     throw new NotFoundException(`Customer #${id} not found`);
  //   }
  //   this.customerModel.splice(index, 1);
  //   return true;
  // }
}
