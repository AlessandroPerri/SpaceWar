var config = {
  width: 1400,
  height: 900,
  physics: {
      default: 'arcade',
      arcade: {
          debug: true,
          debugShowBody: true,
          debugShowStaticBody: false,
          debugShowVelocity: true,          
          gravity:{ y: 0}
      }
  },
  backgroundColor: 0x000000,
  _playerShip: 1,
  _planetIndex: 0,
  _gravityIndex: 0,
  _speedBullet: 500,
  _lifeShip: 3,
  _energyShip: 3,
  _life2Ship: 3,
  _energy2Ship: 3,
  _angleShip: 0,
  _distruggi: 0,
  _special1: 1,
  _special2: 2,
  _velocita: 200,
  scene: [Menu, PlayScene, OptionsScene, InstructionsScene, SpaceshipScene, SinglePlayerScene, DualPlayerScene, GameOverScene],

 


}
var game = new Phaser.Game(config);


//variabili globali
game.config._playerShip = 1;
game.config._planetIndex = 0;
game.config._gravityIndex = 0;
game.config._speedBullet= 500;

game.config._lifeShip= 3;
game.config._energyShip= 3;

game.config._life2Ship= 3;
game.config._energy2Ship= 3;

game.config._angleShip= 0;
game.config._distruggi= 0;

game.config._special1= 1;
game.config._special2= 2;

game.config._velocita= 200;