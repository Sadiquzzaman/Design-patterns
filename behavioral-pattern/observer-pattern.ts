/*

Observer pattern is like a news subscription. 
It's a behavioral design pattern where an object (the subject) maintains a list of its dependents (observers) and notifies them of state changes. 
Think of it as subscribing to updates from a source, and whenever there's new information, you get notified. 
This pattern helps establish a one-to-many relationship between objects, so changes in one object trigger updates in multiple others.

*/

class NewsPublisher {
  private subscribers: Observer[] = [];

  subscribe(subscriber: Observer) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: Observer) {
    const index = this.subscribers.indexOf(subscriber);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
    }
  }

  notifySubscribers(news: string) {
    this.subscribers.forEach((subscriber) => {
      subscriber.update(news);
    });
  }
}

interface Observer {
  update(news: string): void;
}

class NewsReader implements Observer {
  constructor(private name: string) {}

  update(news: string) {
    console.log(`${this.name} received news: ${news}`);
  }
}

const publisher = new NewsPublisher();

const reader1 = new NewsReader("Reader 1");
const reader2 = new NewsReader("Reader 2");

publisher.subscribe(reader1);
publisher.subscribe(reader2);

publisher.notifySubscribers("Breaking news: First news article!");
publisher.unsubscribe(reader2);
publisher.notifySubscribers("Breaking news: First news article!");
