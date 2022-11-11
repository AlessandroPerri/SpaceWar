
//import Ship from '../sprites/Ship.js'
class SinglePlayerScene extends Phaser.Scene {
  
    constructor() {
      super({key: 'SinglePlayerScene'});
      this.ship;
    }
    
  
    preload(){
        this.load.image("ship1", "assets/images/ship1.png");
        this.load.image("ship2", "assets/images/ship2.png");
        this.load.image("laser", "assets/images/Laser.png");
        
    }
  
    create() {
      this.createShip();
      this.text = this.add.text(32, 32, { color: '#fff' });
      //Keys player1
      this.player1Keys = {
        up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
        left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        special: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        missile: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
        laser: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E)
      };

      //Keys player2
      this.player2Keys = {
        up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
        left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        special: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        missile: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
        laser: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E)
      };
        //Ship
      if(this.game.config._playerShip == 1){
        this.ship.setTexture('ship1');
        console.log("ship1 creata");

      }else if(this.game.config._playerShip == 2){
        this.ship.setTexture('ship2');
        console.log("ship2 creata");

      }
    }
    createShip(){
      this.ship = new Ship({
        scene: this,
        texture: 'ship1',
        x: 100,
        y: 400
      });
    }

    update(){
      this.ship.update(this.player1Keys); 
    }
}