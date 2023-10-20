/*

The Flyweight pattern is like resource sharing to optimize memory usage. 
It's used to minimize the memory or computational overhead of a large number of similar objects. 
It separates intrinsic (shared) and extrinsic (unique) states, allowing many objects to share the same intrinsic state.


*/

class CharacterStyle {
  constructor(private fontFamily: string, private fontSize: number) {}

  applyStyle(text: string): string {
    return `<span style="font-family: ${this.fontFamily}; font-size: ${this.fontSize}px">${text}</span>`;
  }
}

class CharacterStyleFactory {
  private styles: { [key: string]: CharacterStyle } = {};

  getStyle(fontFamily: string, fontSize: number): CharacterStyle {
    const key = `${fontFamily}-${fontSize}`;
    if (!this.styles[key]) {
      this.styles[key] = new CharacterStyle(fontFamily, fontSize);
    }
    return this.styles[key];
  }
}

const styleFactory = new CharacterStyleFactory();

function formatText(text: string, fontFamily: string, fontSize: number) {
  const style = styleFactory.getStyle(fontFamily, fontSize);
  return style.applyStyle(text);
}

const text1 = formatText("Hello, world!", "Arial", 12);
const text2 = formatText("Flyweight pattern", "Arial", 12);
const text3 = formatText("Optimizes memory", "Times New Roman", 14);

console.log(text1);
console.log(text2);
console.log(text3);
