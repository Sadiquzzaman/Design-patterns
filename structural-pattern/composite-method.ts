/*

The Composite pattern is like assembling objects into a tree structure to represent part-whole hierarchies. 
It lets you treat individual objects and compositions of objects uniformly. 
You can create complex structures from simpler building blocks, making it easy to work with nested elements.

*/

abstract class FileSystemItem {
  constructor(protected name: string) {}

  abstract ls(): void;
}

class Files extends FileSystemItem {
  ls() {
    console.log(`File: ${this.name}`);
  }
}

class Directory extends FileSystemItem {
  private items: FileSystemItem[] = [];

  addItem(item: FileSystemItem) {
    this.items.push(item);
  }

  ls() {
    console.log(`Directory: ${this.name}`);
    for (const item of this.items) {
      item.ls();
    }
  }
}

const file1 = new Files("document.txt");
const file2 = new Files("image.jpg");
const directory1 = new Directory("Documents");
const directory2 = new Directory("Pictures");

directory1.addItem(file1);
directory2.addItem(file2);

const root = new Directory("Root");
root.addItem(directory1);
root.addItem(directory2);

root.ls();
