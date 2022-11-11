var config = {
  width: 1200,
  height: 800,
  physics: {
      default: 'arcade',
      arcade: {
          debug: true,
          debugShowBody: true,
          debugShowStaticBody: true,
          debugShowVelocity: true,          
          gravity:{ y: 0}
      }
  },
  backgroundColor: 0x000000,
  _playerShip: 1,
  _planetIndex: 0,
  _gravityIndex: 0,
  scene: [Menu, PlayScene, OptionsScene, InstructionsScene, SpaceshipScene, SinglePlayerScene, DualPlayerScene],

 


}
var game = new Phaser.Game(config);
game.config._playerShip = 1;
game.config._planetIndex = 0;
game.config._gravityIndex = 0;
