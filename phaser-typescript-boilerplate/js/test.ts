/// <reference path="./phaser.d.ts"/>

// import "phaser";


// game class
class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

class BootScene extends Phaser.Scene {

  private testSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "BootScene"
    });
  }

  preload(): void {
    this.load.image("logo", "./assets/logo.png");
  }

  create(): void {
    this.testSprite = this.add.sprite(400, 300, "logo");
  }
}


// Start of code that runs on launch
// main game configuration
const config: GameConfig = {
  width: 256,
  height: 256,
  type: Phaser.CANVAS,
  parent: "game",
  scene: BootScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  }
};

// when the page is loaded, create the game instance
window.onload = () => {
  var game = new Game(config);
};