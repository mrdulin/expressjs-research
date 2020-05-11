export default class Animal {
  type: any;
  constructor(type) {
    this.type = type;
  }
  getAnimalSound(animal) {
    if (animal && animal.type == 'dog') return 'woof';
    if (animal && animal.type == 'cat') return 'meow';
  }
}
