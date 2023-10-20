/*

The Memento pattern is like taking snapshots of an object's state, so you can restore it to a previous state later. 
It allows you to capture an object's current condition, store it, and retrieve it when needed. 
This is useful for implementing features like "undo" or saving and restoring the state of an application.

*/

class Editor {
  private content: string = "";

  getContent(): string {
    return this.content;
  }

  setContent(content: string) {
    this.content = content;
  }

  save(): Memento {
    return new Memento(this.content);
  }

  restore(memento: Memento) {
    this.content = memento.getSavedContent();
  }
}

class Memento {
  constructor(private content: string) {}

  getSavedContent(): string {
    return this.content;
  }
}

class EditorHistory {
  private mementos: Memento[] = [];

  push(memento: Memento) {
    this.mementos.push(memento);
  }

  pop(): Memento | undefined {
    return this.mementos.pop();
  }
}

const editor = new Editor();
const editorHistory = new EditorHistory();

editor.setContent("State 1");
editorHistory.push(editor.save());

editor.setContent("State 2");
editorHistory.push(editor.save());

editor.setContent("State 3");
console.log("Current content:", editor.getContent());

const savedMemento = editorHistory.pop();
if (savedMemento) {
  editor.restore(savedMemento);
  console.log("Restored content:", editor.getContent());
}
