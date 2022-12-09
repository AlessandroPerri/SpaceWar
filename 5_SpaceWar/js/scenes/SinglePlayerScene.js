
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
      this.load.image("heart", "assets/images/Heart.png");
      this.load.image("heartGrey", "assets/images/HeartGrey.png");     
      this.load.image("halfHeart", "assets/images/HalfHeart.png");     
      this.load.image("invisible", "assets/images/InvisibleHeart.png"); 
      this.load.image("energy", "assets/images/Energy.png");
      this.load.image("energyGrey", "assets/images/EnergyGrey.png");     
      this.load.image("halfEnergy", "assets/images/HalfEnergy.png");  
      this.load.image("star", "assets/images/Star.png");     
      this.load.image("starGrey", "assets/images/StarGrey.png"); 

      this.load.image("back", "assets/images/ButtonBack.png");
      this.load.image("elaborazione", "assets/images/Elaborazione.png");
      
  }

  create() {
    this.backButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 200, "back");
    this.text = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "elaborazione");
    
    //Back
    this.backButton.setInteractive();
    this.backButton.on("pointerup", () => {
        this.scene.start("PlayScene");
    })
  }
    /*
    this.createShip();
    this.createShip2();
    
  //SHIP 1--------------------------------------------------------------

    //Keys player1
    this.player1Keys = {
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      special: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
      missile: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
      laser: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E)
    };
    //collide ship-ship
    this.physics.add.overlap(this.ship, this.ship2, this.collideShipShip);

    //collide missile
    this.physics.add.overlap(this.ship, this.missiles2, this.collideMissileShip);

    //collide laser
    this.physics.add.overlap(this.ship, this.lasers2, this.collideLaserShip);

    //collide laser-missile
    this.physics.add.overlap(this.missiles2, this.lasers, this.collideLaserMissile);
   
//SHIP 2--------------------------------------------------------------
    
    //collide ship-ship
    this.physics.add.overlap(this.ship2, this.ship, this.collideShipShip);

    //collide missile
    this.physics.add.overlap(this.ship2, this.missiles, this.collideMissileShip);

    //collide laser
    this.physics.add.overlap(this.ship2, this.lasers, this.collideLaserShip);

    //collide laser-missile
    this.physics.add.overlap(this.missiles2, this.lasers, this.collideLaserMissile);

  //PLANET--------------------------------------------------------------

    if(this.game.config._planetIndex == 1){      
      this.createPlanet();
      
      //collide ship
      this.physics.add.overlap(this.planet, this.ship,  this.collideShipPlanet);
      
      //collide ship2
      this.physics.add.overlap(this.planet, this.ship2,  this.collideShipPlanet);
      
      //collide laser
      this.physics.add.overlap(this.planet, this.lasers, this.collideLaserPlanet);
      this.physics.add.overlap(this.planet, this.lasers2, this.collideLaserPlanet);

      //collide missile
      this.physics.add.overlap(this.planet, this.missiles, this.collideMissilePlanet);
      this.physics.add.overlap(this.planet, this.missiles2, this.collideMissilePlanet);
    }
    //Timer per ricaricare l'energia
    this.timedEvent = this.time.addEvent({ delay: 3000, callback: this.rechargeEnergy, callbackScope: this, loop: true });
  }

  rechargeEnergy(){   
    //console.log('energy: '+ this.energia);
    if(this.ship.energia < 3){    
        this.ship.energia += 0.5;
    }
    if(this.ship2.energia < 3){    
      this.ship2.energia += 0.5;
  }
}


//CREAZIONE SHIP-----------------------------------------------------
  //SHIP 1--------------------------------  
  createShip(){
    this.game.config._angleShip = 90;

    //Se la ship selezionata = 1
    if(this.game.config._playerShip == 1){
      this.ship = new Ship({
        scene: this,
        texture: 'ship1',
        x: 100,
        y: 450,
      }, this.game.config._energyShip, this.game.config._lifeShip, this.game.config._gravityIndex, this.game.config._planetIndex, this.game.config._special1, this.game.config._velocita);
      console.log("energy: " + this.game.config._energyShip)

    //Se la ship selezionata = 2
    }else if(this.game.config._playerShip == 2){
      this.ship = new Ship({
        scene: this,
        texture: 'ship2',
        x: 100,
        y: 450,
      }, this.game.config._energyShip, this.game.config._lifeShip, this.game.config._gravityIndex, this.game.config._planetIndex, this.game.config._special1, this.game.config._velocita);
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

  //SHIP 2--------------------------------  
  createShip2(){
    this.game.config._angleShip = 180;
    //Se la ship selezionata = 1
    if(this.game.config._playerShip == 1){
      this.ship2 = new Ship({
        scene: this,
        texture: 'ship2',
        x: 1300,
        y: 450,
      }, this.game.config._energy2Ship, this.game.config._life2Ship, this.game.config._gravityIndex, this.game.config._planetIndex, this.game.config._special2, this.game.config._velocita);
      console.log("energy: " + this.game.config._energy2Ship)

    //Se la ship selezionata = 2
    }else if(this.game.config._playerShip == 2){
      this.ship2 = new Ship({
        scene: this,
        texture: 'ship1',
        x: 1300,
        y: 450,
      }, this.game.config._energy2Ship, this.game.config._life2Ship, this.game.config._gravityIndex, this.game.config._planetIndex, this.game.config._special2, this.game.config._velocita);
      console.log("energy: " + this.game.config._energy2Ship)
      console.log("Angle: " + this.game.config._angleShip)
      
    }
    //Gruppo oggetti di tipo missile
    this.missiles2 = this.physics.add.group({
      classType: Missile,
      maxSize: 30,
      runChildUpdate: true,
    });
    this.ship2.assignMissiles(this.missiles2);
    
    //Gruppo oggetti di tipo laser
    this.lasers2 = this.physics.add.group({
      classType: Laser,
      maxSize: 30,
      runChildUpdate: true,
    });
    this.ship2.assignLasers(this.lasers2);
    this.ship2.angle = -180;
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
  collideShipShip(ship, ship2){
    ship.vita = ship.vita - 100;
    ship2.vita = ship2.vita - 100;
  }
 

  collideMissileShip(ship, missile){
    missile.destroy();
    ship.vita = ship.vita -1;
  }
  collideLaserShip(ship, laser){
    laser.destroy();
    ship.vita = ship.vita -0.5;

  }
 
  //collisioni laser - missile
  collideLaserMissile(missile, laser){
    missile.destroy();
    laser.destroy();
  }

  //collisioni pianeta
  collideShipPlanet(planet, ship){
    //nella ship non faccio destroy perché altrimenti mi da errori nella creazione della ship
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


  updateHUDP1(){
    this.playerText = this.add.text(14, 14, 'PLAYER 1', { fontSize: '32px', fill: 'white' });

    //VITA----------------------------------------------------------
    this.heart3 = this.add.sprite(14, 45, 'invisible').setOrigin(0, 0);
    this.heart2 = this.add.sprite(46, 45, 'invisible').setOrigin(0, 0);
    this.heart1 = this.add.sprite(78, 45, 'invisible').setOrigin(0, 0);

    if(this.ship.vita == 3){
      this.heart1.setTexture('heart');
      this.heart2.setTexture('heart');
      this.heart3.setTexture('heart');
    }
    //Cuore 1
    if(this.ship.vita == 2.5){
      this.heart1.setTexture('halfHeart');
      this.heart2.setTexture('heart');
      this.heart3.setTexture('heart');
    }else if(this.ship.vita == 2){
      this.heart1.setTexture('heartGrey');
    }

    //Cuore 2
    if(this.ship.vita == 1.5){
      this.heart2.setTexture('halfHeart');
      this.heart3.setTexture('heart');
    }else if(this.ship.vita == 1){
      this.heart2.setTexture('heartGrey');
      this.heart1.setTexture('heartGrey');
    }

    //Cuore 3
    if(this.ship.vita == 0.5){
      this.heart3.setTexture('halfHeart');
    }else if(this.ship.vita == 0){
      this.heart3.setTexture('heartGrey');
      this.heart2.setTexture('heartGrey');
      this.heart1.setTexture('heartGrey');
    }

    //ENERGIA----------------------------------------------------------
    this.energy3 = this.add.sprite(5, 75, 'invisible').setOrigin(0, 0);
    this.energy2 = this.add.sprite(37, 75, 'invisible').setOrigin(0, 0);
    this.energy1 = this.add.sprite(69, 75, 'invisible').setOrigin(0, 0);

    if(this.ship.energia == 3){
      this.energy1.setTexture('energy');
      this.energy2.setTexture('energy');
      this.energy3.setTexture('energy');
    }
    //Fulmine 1
    if(this.ship.energia == 2.5){
      this.energy1.setTexture('halfEnergy');
      this.energy2.setTexture('energy');
      this.energy3.setTexture('energy');
    }else if(this.ship.energia == 2){
      this.energy1.setTexture('energyGrey');
    }

    //Fulmine 2
    if(this.ship.energia == 1.5){
      this.energy2.setTexture('halfEnergy');
      this.energy3.setTexture('energy');
    }else if(this.ship.energia == 1){
      this.energy2.setTexture('energyGrey');
      this.energy1.setTexture('energyGrey');
    }

    //Fulmine 3
    if(this.ship.energia == 0.5){
      this.energy3.setTexture('halfEnergy');
    }else if(this.ship.energia == 0){
      this.energy3.setTexture('energyGrey');
      this.energy2.setTexture('energyGrey');
      this.energy1.setTexture('energyGrey');
    }
    //SPECIALITA----------------------------------------------------------
    this.specialty1 = this.add.sprite(115, 75, 'star').setOrigin(0, 0);
    if(this.ship.special == 0){
      this.specialty1.setTexture('starGrey');
    }
  }
  updateHUDP2(){
    this.player2Text = this.add.text(1220, 14, 'PLAYER 2', { fontSize: '32px', fill: 'white' });

  //VITA----------------------------------------------------------
    this.heart6 = this.add.sprite(1230, 65, 'invisible')
    this.heart5 = this.add.sprite(1262, 65, 'invisible')
    this.heart4 = this.add.sprite(1294, 65, 'invisible')

    if(this.ship2.vita == 3){
      this.heart4.setTexture('heart');
      this.heart5.setTexture('heart');
      this.heart6.setTexture('heart');
    }
    //Cuore 1
    if(this.ship2.vita == 2.5){
      this.heart4.setTexture('halfHeart');
      this.heart5.setTexture('heart');
      this.heart6.setTexture('heart');
    }else if(this.ship2.vita == 2){
      this.heart4.setTexture('heartGrey');
    }

    //Cuore 2
    if(this.ship2.vita == 1.5){
      this.heart5.setTexture('halfHeart');
      this.heart6.setTexture('heart');
    }else if(this.ship2.vita == 1){
      this.heart5.setTexture('heartGrey');
      this.heart4.setTexture('heartGrey');
    }

    //Cuore 3
    if(this.ship2.vita == 0.5){
      this.heart6.setTexture('halfHeart');
    }else if(this.ship2.vita == 0){
      this.heart6.setTexture('heartGrey');
      this.heart5.setTexture('heartGrey');
      this.heart4.setTexture('heartGrey');
    }

  //ENERGIA----------------------------------------------------------
    this.energy6 = this.add.sprite(1223, 95, 'invisible')
    this.energy5 = this.add.sprite(1255, 95, 'invisible')
    this.energy4 = this.add.sprite(1287, 95, 'invisible')

    if(this.ship2.energia == 3){
      this.energy4.setTexture('energy');
      this.energy5.setTexture('energy');
      this.energy6.setTexture('energy');
    }
    //Fulmine 1
    if(this.ship2.energia == 2.5){
      this.energy4.setTexture('halfEnergy');
      this.energy5.setTexture('energy');
      this.energy6.setTexture('energy');
    }else if(this.ship2.energia == 2){
      this.energy4.setTexture('energyGrey');
    }

    //Fulmine 2
    if(this.ship2.energia == 1.5){
      this.energy5.setTexture('halfEnergy');
      this.energy6.setTexture('energy'); 
    }else if(this.ship2.energia == 1){
      this.energy5.setTexture('energyGrey');
      this.energy4.setTexture('energyGrey');
    }

    //Fulmine 3
    if(this.ship2.energia == 0.5){
      this.energy6.setTexture('halfEnergy');
    }else if(this.ship2.energia == 0){
      this.energy6.setTexture('energyGrey');
      this.energy5.setTexture('energyGrey');
      this.energy4.setTexture('energyGrey');
    }

  //SPECIALITA----------------------------------------------------------
    this.specialty2 = this.add.sprite(1310, 75, 'star').setOrigin(0, 0);
    if(this.ship2.special == 0){
      this.specialty2.setTexture('starGrey');
    }

    
  }
  */
  update(){    
    /*
    //Key
    this.ship.update(this.player1Keys); 
    this.ship2.update(this.player2Keys);
  
    //Score
    this.updateHUDP1();
    this.updateHUDP2();

    //Pianeta
    if(this.game.config._planetIndex == 1){      
      this.planet.update(0.2);  
    }

    //Gameover
    if (this.ship.vita <= 0 || this.ship2.vita <= 0){
      console.log("distruggi: " + this.game.config._distruggi);
      this.scene.start("GameOverScene");
    }
    */
  }  
}