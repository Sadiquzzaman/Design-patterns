/*
It is like a super factory that creates families of related products. 
Imagine you're designing a game, and you need different types of characters, weapons, and vehicles. 
Instead of creating these objects directly, you use an abstract factory to create them in a consistent way. 
This allows you to ensure that all the products you create are compatible and work well together. 
*/

abstract class Car {
  abstract drive(): void;
}

abstract class Motorcycle {
  abstract ride(): void;
}

class SportsCar extends Car {
  drive() {
    console.log("Driving a Sports Car");
  }
}

class CruiserMotorcycle extends Motorcycle {
  ride() {
    console.log("Riding a Cruiser Motorcycle");
  }
}

abstract class VehicleFactory {
  abstract createCar(): Car;
  abstract createMotorcycle(): Motorcycle;
}

class SportsVehicleFactory extends VehicleFactory {
  createCar() {
    return new SportsCar();
  }

  createMotorcycle() {
    return new CruiserMotorcycle();
  }
}

class CruiserVehicleFactory extends VehicleFactory {
  createCar() {
    return new SportsCar();
  }

  createMotorcycle() {
    return new CruiserMotorcycle();
  }
}

function createVehicles(factory: VehicleFactory) {
  const car = factory.createCar();
  const motorcycle = factory.createMotorcycle();

  return { car, motorcycle };
}

const sportsVehicles = createVehicles(new SportsVehicleFactory());
const cruiserVehicles = createVehicles(new CruiserVehicleFactory());

sportsVehicles.car.drive();
sportsVehicles.motorcycle.ride();

cruiserVehicles.car.drive();
cruiserVehicles.motorcycle.ride();

// Difference between factory and abstract-factory:

/*
Factory Method:

1. Creation of a single product
2. Subclassing
3. One type of product


Abstract Factory:

1. Creation of product families
2. Composition of factories
3. Multiple types of products
*/
