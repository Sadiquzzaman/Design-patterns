/*

It allows you to pass a request through a series of handlers,
 each capable of either processing the request or passing it to the next handler in the chain. 
 
It provides a way to decouple senders and receivers of requests, 
allowing multiple objects to handle a request without knowing which one will do so.

*/

interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class ConcreteHandlerA extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "A") {
      return "Handler A can handle this request.";
    } else {
      return super.handle(request);
    }
  }
}

class ConcreteHandlerB extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "B") {
      return "Handler B can handle this request.";
    } else {
      return super.handle(request);
    }
  }
}

const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();

handlerA.setNext(handlerB);

console.log(handlerA.handle("A"));
console.log(handlerA.handle("B"));
console.log(handlerA.handle("C"));
