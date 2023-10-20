/*

The Iterator pattern is like a playlist in a music app. 
It provides a way to access the elements of a collection without exposing the underlying structure. 
It allows you to navigate through a collection one item at a time, making it easy to iterate over its elements in a uniform way.


*/

interface Iterator<T> {
  hasNext(): boolean;
  next(): { value: T; done: boolean };
}

class Playlist {
  private songs: string[] = [];

  addSong(song: string) {
    this.songs.push(song);
  }

  getIterator(): Iterator<string> {
    return new PlaylistIterator(this.songs);
  }
}

class PlaylistIterator implements Iterator<string> {
  private songs: string[];
  private position: number = 0;

  constructor(songs: string[]) {
    this.songs = songs;
  }

  hasNext(): boolean {
    return this.position < this.songs.length;
  }

  next(): { value: string; done: boolean } {
    if (this.hasNext()) {
      return { value: this.songs[this.position++], done: false };
    }
    return { value: "", done: true };
  }
}

const myPlaylist = new Playlist();
myPlaylist.addSong("Song 1");
myPlaylist.addSong("Song 2");
myPlaylist.addSong("Song 3");

const iterator = myPlaylist.getIterator();

while (!iterator.next().done) {
  console.log(iterator.next().value);
}
