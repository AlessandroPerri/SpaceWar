class SinglePlayerScene extends Phaser.Scene {
    constructor() {
      super({key: 'SinglePlayerScene'});
    }
  
    preload(){
        this.load.image("ship1", "assets/images/ship1.png");
        this.load.image("ship2", "assets/images/ship2.png");
        
      
    }
  
    create() {
        //Ship
        console.log(this.registry.get('playerShip'));
        if(this.registry.get('playerShip') == 1){
            this.ship = this.physics.add.sprite(0, 400, "ship1").setOrigin(0, 400);  
            console.log("ship1 creata");
            this.ship.setCollideWorldBounds(true);
  
        }else if(this.registry.get('playerShip') == 2){
            this.ship = this.physics.add.sprite(100, 400, "ship2");  
            console.log("ship2 creata");
            this.ship.setCollideWorldBounds(true);
        }
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D' });
    }
    update(){
        if(this.cursors.left.isDown){
          this.ship.setVelocityX(-100);
        }else if(this.cursors.right.isDown){
          this.ship.setVelocityX(100);
        }else if(this.cursors.up.isDown){
          this.ship.setVelocityY(-100);
        }else if(this.cursors.down.isDown){
          this.ship.setVelocityY(100);
        }else{
          this.ship.setVelocityX(0);
          this.ship.setVelocityY(0);
        }
        if (this.cursors.up.isDown) {
            this.physics.velocityFromRotation(this.ship.rotation + 1.5, 100, this.ship.body.acceleration);
          } else {
            this.ship.setAcceleration(0);
          }
    }
}