
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
        this.load.image("planet", "assets/images/Planet.png");       
    }
  
    create() {
      
      //SHIP--------------------------------------------------------------
      this.createShip();
      //this.createShip2();

      //Keys player1
     
      this.player1Keys = {
        up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
        left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        special: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        missile: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
        laser: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E)
      };
     
     /*
      //Keys player2
      this.player1Keys = {
        up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_EIGHT),
        left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_FOUR),
        special: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_FIVE),
        right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_SIX),
        missile: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_SEVEN),
        laser: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_NINE)
      };
      */
      

      //collide missile
      this.physics.add.overlap(this.ship, this.missiles, this.collideMissileShip);

      //collide laser
      this.physics.add.overlap(this.ship, this.lasers, this.collideLaserShip);

      //PLANET--------------------------------------------------------------
      if(this.game.config._planetIndex == 1){      
        this.createPlanet();

        //collide ship
        this.physics.add.overlap(this.planet, this.ship,  this.collideShipPlanet);
        
        //collide laser
        this.physics.add.overlap(this.planet, this.lasers, this.collideLaserPlanet);
        
        //collide missile
        this.physics.add.overlap(this.planet, this.missiles, this.collideMissilePlanet);

       
      }
    }


    //CREAZIONE SHIP-----------------------------------------------------
    createShip(){
      this.game.config._angleShip = 90;

      //Se la ship selezionata = 1
      if(this.game.config._playerShip == 1){
        this.ship = new Ship({
          scene: this,
          texture: 'ship1',
          x: 100,
          y: 450,
        }, this.game.config._angleShip, this.game.config._energyShip, this.game.config._lifeShip);
        console.log("energy: " + this.game.config._energyShip)

      //Se la ship selezionata = 2
      }else if(this.game.config._playerShip == 2){
        this.ship = new Ship({
          scene: this,
          texture: 'ship2',
          x: 100,
          y: 450,
        }, this.game.config._angleShip, this.game.config._energyShip, this.game.config._lifeShip);
        console.log("energy: " + this.game.config._energyShip)
      }

      //Gruppo oggetti di tipo s
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
      this.game.config._angleShip = 180;
      //Se la ship selezionata = 1
      if(this.game.config._playerShip == 1){
        this.ship = new Ship({
          scene: this,
          texture: 'ship2',
          x: 1300,
          y: 450,
        }, this.game.config._angleShip, this.game.config._energyShip, this.game.config._lifeShip, this.game.config._gravityIndex, this.game.config._planetIndex);
        console.log("energy: " + this.game.config._energyShip)

      //Se la ship selezionata = 2
      }else if(this.game.config._playerShip == 2){
        this.ship = new Ship({
          scene: this,
          texture: 'ship1',
          x: 1300,
          y: 450,
        }, this.game.config._angleShip, this.game.config._energyShip, this.game.config._lifeShip, this.game.config._gravityIndex, this.game.config._planetIndex);
        console.log("energy: " + this.game.config._energyShip)
        console.log("Angle: " + this.game.config._angleShip)
        
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

    //CREAZIONE PIANETA-----------------------------------------------------
    createPlanet(){
      this.planet = new Planet({
        scene: this,
        texture: 'planet',
        x: 700,
        y: 450,
      });
	    
    }

    //COLLISIONI-----------------------------------------------------
    
    //collisioni ship
    
    collideMissileShip(ship, missile){
      missile.destroy();
      //ship.vita -= 1;
      ship.vita = ship.vita -1;
      
      //this.game.config._lifeShip -= 1;
      //if(this.game.config._lifeShip == 0){
        
      //}
      
    }
    collideLaserShip(ship, laser){
      laser.destroy();
      //ship.vita -= 0.5;
      ship.vita = ship.vita -0.5;
      //this.game.config._lifeShip -= 0.5;
      //if(this.game.config._lifeShip == 0){
      //  
      //}
    }
   
    //collisioni pianeta

    collideShipPlanet(planet, ship){
      //nella ship non faccio destroy perché altrimenti mi da errori nella creazione della ship
      //this.game.config._distruggi = 1;
      //ship.vita -= 100;
      ship.vita = ship.vita -100;
      ship.visible = false;
      ship.body.enable = false;
    }
    collideMissilePlanet(planet, missile){
      missile.destroy();
      
    }
    collideLaserPlanet(planet, laser){
      laser.destroy();
    }


    updateHUD(){
      //TODO mostrare testo e vita delle navi
    }
    update(){
      this.ship.update(this.player1Keys); 
      //this.updateHUD();
      if (this.ship.vita <= 0){
        console.log("distruggi: " + this.game.config._distruggi);
        this.scene.start("GameOverScene");
      }
      
      

      if(this.game.config._planetIndex == 1){      
        this.planet.update(0.2);  
      }
    }

    
}