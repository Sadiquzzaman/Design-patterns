/*
The Factory Method pattern is like a specialized "factory" that creates objects. 
Imagine it as a production line in a factory where different products are made. 
Instead of directly creating objects in your code, you use a factory method to produce them. 
This way, you can easily switch between different product variants or types without changing your main code. 
It promotes flexibility and encapsulates the creation process.
*/

abstract class Shape {
  abstract draw(): void;
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a Circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing a Square");
  }
}

abstract class ShapeFactory {
  abstract createShape(): Shape;
}

class CircleFactory extends ShapeFactory {
  createShape() {
    return new Circle();
  }
}

class SquareFactory extends ShapeFactory {
  createShape() {
    return new Square();
  }
}

const circleFactory = new CircleFactory();
const squareFactory = new SquareFactory();

const circle = circleFactory.createShape();
const square = squareFactory.createShape();

circle.draw();
square.draw();
