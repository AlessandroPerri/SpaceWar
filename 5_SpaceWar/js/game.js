var config = {
  width: 1200,
  height: 800,
  physics: {
      default: 'arcade',
      arcade: {
          debug: false,
          gravity:{ y: 0}
      }
  },
  backgroundColor: 0x000000,
  scene: [Menu, PlayScene, OptionsScene, InstructionsScene, SpaceshipScene, SinglePlayerScene, DualPlayerScene],
  pixelArt: true


}


var game = new Phaser.Game(config);
