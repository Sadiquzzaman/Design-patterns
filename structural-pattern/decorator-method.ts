/*

The Decorator pattern is like adding toppings to a pizza. It allows you to add new behaviors or responsibilities to objects dynamically without altering their structure. 
You can wrap objects with decorators that enhance their functionality, making it easy to combine and reuse features.

*/

module MyTextModule {
  export interface Text {
    render(): string;
  }
}

class BasicText implements MyTextModule.Text {
  constructor(private content: string) {}

  render() {
    return this.content;
  }
}

class TextDecorator implements MyTextModule.Text {
  constructor(private text: MyTextModule.Text) {}

  render() {
    return this.text.render();
  }
}

class BoldDecorator extends TextDecorator {
  render() {
    return `<b>${super.render()}</b>`;
  }
}

class ItalicDecorator extends TextDecorator {
  render() {
    return `<i>${super.render()}</i>`;
  }
}

const text = new BasicText("Hello, world!");

const boldText = new BoldDecorator(text);
const italicBoldText = new ItalicDecorator(boldText);

console.log("Original Text:", text.render());
console.log("Bold Text:", boldText.render());
console.log("Italic Bold Text:", italicBoldText.render());
