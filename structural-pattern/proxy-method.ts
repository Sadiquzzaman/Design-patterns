/*

The Proxy pattern is like having a surrogate or placeholder for another object to control access to it. 
It allows you to add an additional layer of control or functionality to an object without changing its core behavior. 
It's like having a security guard at a gate, allowing or denying access to a building.

*/

interface Image {
  display(): void;
}

class RealImage implements Image {
  constructor(private filename: string) {
    this.loadImage();
  }

  private loadImage() {
    console.log(`Loading image: ${this.filename}`);
  }

  display() {
    console.log(`Displaying image: ${this.filename}`);
  }
}
class ImageProxy implements Image {
  private realImage: RealImage | null = null;
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  display() {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

const image1 = new ImageProxy("large-image.jpg");
const image2 = new ImageProxy("small-image.png");

image1.display();
image1.display();
image2.display();
