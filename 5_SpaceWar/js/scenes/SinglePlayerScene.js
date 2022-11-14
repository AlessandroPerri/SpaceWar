
//import Ship from '../sprites/Ship.js'
class SinglePlayerScene extends Phaser.Scene {
  
    constructor() {
      super({key: 'SinglePlayerScene'});
      //this.ship;
    }
    
  
    preload(){
        this.load.image("ship1", "assets/images/ship1.png");
        this.load.image("ship2", "assets/images/ship2.png");
        this.load.image("missile", "assets/images/Missile.png");
        this.load.image("laser", "assets/images/Laser.png");
        
    }
  
    create() {
      //SHIP--------------------------------------------------------------
      this.createShip();
      this.createShip2();

      //Keys player1
      this.player1Keys = {
        up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
        left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        special: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        missile: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
        laser: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E)
      };
    }
    createShip(){
      //Se la ship selezionata = 1
      if(this.game.config._playerShip == 1){
        this.ship = new Ship({
          scene: this,
          texture: 'ship1',
          x: 100,
          y: 450,
        }, this.game.config._energyShip, this.game.config._lifeShip);
        console.log("energy: " + this.game.config._energyShip)

      //Se la ship selezionata = 2
      }else if(this.game.config._playerShip == 2){
        this.ship = new Ship({
          scene: this,
          texture: 'ship2',
          x: 100,
          y: 450,
        }, 0, this.game.config._energyShip, this.game.config._lifeShip);
        console.log("energy: " + this.game.config._energyShip)
      }

      //Gruppo oggetti di tipo missile
      this.missiles = this.physics.add.group({
        classType: Missile,
        maxSize: 30,
        runChildUpdate: true,
      });
      this.ship.assignMissiles(this.missiles);

      //Gruppo oggetti di tipo laser
      this.lasers = this.physics.add.group({
        classType: Laser,
        maxSize: 30,
        runChildUpdate: true,
      });
      this.ship.assignLasers(this.lasers);
    }

    createShip2(){
      //Se la ship selezionata = 1
      if(this.game.config._playerShip == 1){
        this.ship = new Ship({
          scene: this,
          texture: 'ship2',
          x: 1300,
          y: 450,
        }, 90, this.game.config._energyShip, this.game.config._lifeShip);
        console.log("energy: " + this.game.config._energyShip)

      //Se la ship selezionata = 2
      }else if(this.game.config._playerShip == 2){
        this.ship = new Ship({
          scene: this,
          texture: 'ship1',
          x: 1300,
          y: 450,
        }, this.game.config._energyShip, this.game.config._lifeShip);
        console.log("energy: " + this.game.config._energyShip)
      }

      //Gruppo oggetti di tipo missile
      this.missiles = this.physics.add.group({
        classType: Missile,
        maxSize: 30,
        runChildUpdate: true,
      });
      this.ship.assignMissiles(this.missiles);
      
      //Gruppo oggetti di tipo laser
      this.lasers = this.physics.add.group({
        classType: Laser,
        maxSize: 30,
        runChildUpdate: true,
      });
      this.ship.assignLasers(this.lasers);
    }
      

    collideShipMissile(ship, missiles){
      this.game.config._lifeShip--;
      missiles.destroy();
    }


    update(){
      this.ship.update(this.player1Keys); 
    }
}