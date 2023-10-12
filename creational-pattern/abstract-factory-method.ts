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
