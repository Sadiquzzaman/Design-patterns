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
