/*

 The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. 
 It's like having a single, shared resource that multiple parts of your code can use

*/

class Singleton {
  private static instance: Singleton | null = null;

  private constructor() {}

  static getInstance(): Singleton {
    if (Singleton.instance === null) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2);
