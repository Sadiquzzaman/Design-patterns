/*

The Bridge pattern is like having multiple layers of abstraction. 
It separates an object's abstraction (what it does) from its implementation (how it does it). 
This separation allows you to change or extend both the abstraction and the implementation independently without affecting each other.

*/

abstract class Shape {
  constructor(protected renderer: Renderer) {}

  abstract draw(): void;
}

interface Renderer {
  renderShape(): void;
}

class VectorRenderer implements Renderer {
  renderShape() {
    console.log("Rendering shape as vectors");
  }
}

class RasterRenderer implements Renderer {
  renderShape() {
    console.log("Rendering shape as pixels");
  }
}

class Circle extends Shape {
  constructor(private radius: number, renderer: Renderer) {
    super(renderer);
  }

  draw() {
    console.log(`Drawing a circle with radius ${this.radius}`);
    this.renderer.renderShape();
  }
}

class Square extends Shape {
  constructor(private sideLength: number, renderer: Renderer) {
    super(renderer);
  }

  draw() {
    console.log(`Drawing a square with side length ${this.sideLength}`);
    this.renderer.renderShape();
  }
}

const vectorCircle = new Circle(5, new VectorRenderer());
vectorCircle.draw();

const rasterSquare = new Square(4, new RasterRenderer());
rasterSquare.draw();
