export interface CarBuilder {
  validate(model): void;
}

export function CreateCar(): CarBuilder {
  return { validate(model) {} };
}
