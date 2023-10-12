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
