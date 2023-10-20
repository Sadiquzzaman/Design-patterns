/*

The Facade pattern is like a simplified front desk at a hotel. 
It provides a unified, higher-level interface to a set of interfaces in a subsystem, making it easier to use. 
It hides the complexity of the subsystem and presents a single, user-friendly entry point.

*/

class CPU {
  start() {
    console.log("CPU is starting...");
  }
}

class Memory {
  load() {
    console.log("Memory is loading data...");
  }
}

class HardDrive {
  read() {
    console.log("Hard Drive is reading data...");
  }
}

class ComputerFacade {
  private cpu: CPU;
  private memory: Memory;
  private hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  startComputer() {
    console.log("Starting the computer...");
    this.cpu.start();
    this.memory.load();
    this.hardDrive.read();
    console.log("Computer started successfully.");
  }
}

const computer = new ComputerFacade();
computer.startComputer();
