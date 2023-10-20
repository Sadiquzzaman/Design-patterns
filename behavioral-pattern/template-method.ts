/*

The Template Method pattern is like creating a blueprint for an operation. 
It defines the structure of an algorithm but lets subclasses provide specific implementations for certain steps. 
It's like having a fixed template for a process with placeholders that can be customized by subclasses.

*/

abstract class CoffeeTemplate {
  makeCoffee(): void {
    this.boilWater();
    this.brewCoffeeGrinds();
    this.pourInCup();
    this.addCondiments();
  }

  abstract brewCoffeeGrinds(): void;
  abstract addCondiments(): void;

  boilWater() {
    console.log("Boiling water");
  }

  pourInCup() {
    console.log("Pouring into cup");
  }
}

class Coffee extends CoffeeTemplate {
  brewCoffeeGrinds() {
    console.log("Dripping coffee through filter");
  }

  addCondiments() {
    console.log("Adding sugar and milk");
  }
}

const coffee = new Coffee();
coffee.makeCoffee();
