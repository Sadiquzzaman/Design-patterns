/*

Command pattern is like a remote control for your devices. 
It encapsulates requests as objects,allowing you to send, queue,and execute commands without knowing the details of how they work. 
It helps decouple the sender(the remote control) from the receiver(the device),making it easy to add, modify,or undo commands.

*/

interface Command {
  execute(): void;
}

class Light {
  turnOn() {
    console.log("Light is on");
  }

  turnOff() {
    console.log("Light is off");
  }
}

class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

class RemoteControl {
  private command: Command | null = null;

  setCommand(command: Command) {
    this.command = command;
  }

  pressButton() {
    if (this.command) {
      this.command.execute();
    }
  }
}

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(lightOn);
remote.pressButton();

remote.setCommand(lightOff);
remote.pressButton();
