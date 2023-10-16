/*

The Builder pattern is like a set of step-by-step instructions for creating a complex object. 
Think of it as a recipe for constructing an object with many optional parts. 
Instead of directly creating an object with multiple properties, you follow the steps in the builder to set each part, 
allowing you to create an object with just the components you need. This pattern simplifies object construction and allows you to customize objects easily by adjusting the steps

*/

class Computer {
  private cpu: string;
  private ram: string;
  private storage: string;

  constructor(cpu: string, ram: string, storage: string) {
    this.cpu = cpu;
    this.ram = ram;
    this.storage = storage;
  }

  displayInfo() {
    console.log(
      `Computer Specs: CPU - ${this.cpu}, RAM - ${this.ram}, Storage - ${this.storage}`
    );
  }
}

class ComputerBuilder {
  private cpu: string = "Default CPU";
  private ram: string = "Default RAM";
  private storage: string = "Default Storage";

  setCPU(cpu: string) {
    this.cpu = cpu;
    return this;
  }

  setRAM(ram: string) {
    this.ram = ram;
    return this;
  }

  setStorage(storage: string) {
    this.storage = storage;
    return this;
  }

  build() {
    return new Computer(this.cpu, this.ram, this.storage);
  }
}

const computer = new ComputerBuilder()
  .setCPU("Intel i7")
  .setRAM("16GB")
  .setStorage("512GB SSD")
  .build();

computer.displayInfo();
