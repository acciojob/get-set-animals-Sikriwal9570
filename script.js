class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }

  // Override the makeSound method for Cat
  makeSound() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }

  // Override the makeSound method for Dog
  makeSound() {
    console.log("Woof");
  }
}

// Example usage:
const genericAnimal = new Animal("Generic");
console.log("Species:", genericAnimal.species); // Output: Species: Generic
genericAnimal.makeSound(); // Output: Generic animal sound

const fluffy = new Cat("Cat");
console.log("Species:", fluffy.species); // Output: Species: Cat
fluffy.makeSound(); // Output: Meow
fluffy.purr(); // Output: purr

const rover = new Dog("Dog");
console.log("Species:", rover.species); // Output: Species: Dog
rover.makeSound(); // Output: Woof
rover.bark(); // Output: woof
