var config = {
  width: 1200,
  height: 800,
  physics: {
      default: 'arcade',
      arcade: {
          debug: false
      }
  },
  backgroundColor: 0x000000,
  scene: [Menu, PlayScene, OptionsScene, InstructionsScene, SpaceshipScene],
  pixelArt: true,
  _playerShip: 0,
  _gravityIndex: 0,
  _planetIndex: 0
}

var game = new Phaser.Game(config);