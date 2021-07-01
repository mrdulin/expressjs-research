import { CarBuilder, CreateCar } from './builders/carBuilder';

export default class Vehicle {
  private builder: CarBuilder;

  constructor() {
    this.builder = CreateCar();
  }

  createBmw(model) {
    return this.builder.validate(model);
  }
}
