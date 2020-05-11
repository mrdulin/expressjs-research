import Animal from './animal';

export default function getAnimalSound(type) {
  let animal = new Animal(type);
  let animalSound = animal.getAnimalSound(animal);
  return animalSound;
}
