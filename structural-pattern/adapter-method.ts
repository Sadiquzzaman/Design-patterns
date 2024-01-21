/*
The Adapter pattern is like a bridge between two incompatible interfaces. 
It allows objects with different interfaces to work together. 
You can think of it as a translator that makes one interface look like another, enabling them to collaborate seamlessly.
*/

class VLCPlayer {
  playVLC(file: string) {
    console.log(`Playing VLC file: ${file}`);
  }
}

interface MediaPlayer {
  play(audioType: string, file: string): void;
}

class VLCAdapter implements MediaPlayer {
  private vlcPlayer: VLCPlayer;

  constructor() {
    this.vlcPlayer = new VLCPlayer();
  }

  play(audioType: string, file: string) {
    if (audioType === "vlc") {
      this.vlcPlayer.playVLC(file);
    } else {
      console.log(`Incompatible audio format: ${audioType}`);
    }
  }
}

const mediaPlayer: MediaPlayer = new VLCAdapter();

mediaPlayer.play("mp3", "song.mp3");
mediaPlayer.play("vlc", "video.vlc");
