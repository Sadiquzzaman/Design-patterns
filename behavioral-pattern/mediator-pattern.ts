/*

lets you reduce chaotic dependencies between objects. 
The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.
It's is like a central communication hub. It provides a way for multiple objects to communicate with each other without directly referencing or knowing about one another. 
Instead of objects talking to each other, they talk through the mediator, which manages the interactions. 
This pattern simplifies the connections between objects and promotes decoupling.

*/

interface Mediator {
  notify(sender: Colleague, event: string): void;
}

abstract class Colleague {
  constructor(protected mediator: Mediator) {}

  abstract send(message: string): void;

  abstract receive(message: string): void;
}

class ConcreteColleagueA extends Colleague {
  send(message: string) {
    console.log(`Colleague A sends: ${message}`);
    this.mediator.notify(this, message);
  }

  receive(message: string) {
    console.log(`Colleague A receives: ${message}`);
  }
}

class ConcreteColleagueB extends Colleague {
  send(message: string) {
    console.log(`Colleague B sends: ${message}`);
    this.mediator.notify(this, message);
  }

  receive(message: string) {
    console.log(`Colleague B receives: ${message}`);
  }
}

class ConcreteMediator implements Mediator {
  private colleagueA: ConcreteColleagueA;
  private colleagueB: ConcreteColleagueB;

  setColleagueA(colleagueA: ConcreteColleagueA) {
    this.colleagueA = colleagueA;
  }

  setColleagueB(colleagueB: ConcreteColleagueB) {
    this.colleagueB = colleagueB;
  }

  notify(sender: Colleague, event: string) {
    if (sender === this.colleagueA) {
      this.colleagueB.receive(event);
    } else {
      this.colleagueA.receive(event);
    }
  }
}

const mediator = new ConcreteMediator();

const colleagueA = new ConcreteColleagueA(mediator);
const colleagueB = new ConcreteColleagueB(mediator);

mediator.setColleagueA(colleagueA);
mediator.setColleagueB(colleagueB);

colleagueA.send("Hello from Colleague A");
colleagueB.send("Hi from Colleague B");
