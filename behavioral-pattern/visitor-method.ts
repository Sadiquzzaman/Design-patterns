/*

The Visitor pattern is like having a travel guide visit various tourist attractions. 
It allows you to add new operations to objects without changing their structure. 
It separates the algorithm from the objects, enabling you to perform different operations on a collection of objects without modifying those objects.

*/

interface Animal {
  accept(visitor: AnimalVisitor): void;
}

class Lion implements Animal {
  accept(visitor: AnimalVisitor) {
    visitor.visitLion(this);
  }
}

class Elephant implements Animal {
  accept(visitor: AnimalVisitor) {
    visitor.visitElephant(this);
  }
}

interface AnimalVisitor {
  visitLion(lion: Lion): void;
  visitElephant(elephant: Elephant): void;
}

class ZooVisitor implements AnimalVisitor {
  visitLion(lion: Lion) {
    console.log("Zoo visitor observes the lion.");
  }

  visitElephant(elephant: Elephant) {
    console.log("Zoo visitor observes the elephant.");
  }
}

const lion = new Lion();
const elephant = new Elephant();

const zooVisitor = new ZooVisitor();

lion.accept(zooVisitor);
elephant.accept(zooVisitor);
