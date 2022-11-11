class Ship extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y, config.texture);

        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);

        //decellerazione attiva
        this.body.setDamping(true);

        //ship rallenta da sola
        this.body.setDrag(0.5);

        this.body.setMaxVelocity(200);
        this.body.setCollideWorldBounds(true);     
        
        this.lastFired = null;
        this.fireInterval = 1;
        
    }
    assignBullets(bullets){
        this.bullets = bullets;
    }

    update(keys, time){
        if(keys == null){

        }else{
            //W
            if(keys.up.isDown) {
                console.log('W key pressed');    
                this.scene.physics.velocityFromRotation(this.rotation, 200, this.body.acceleration);
                console.log('body accelleration: '+ this.body.acceleration)                                  
                

            } else{
                this.body.setAccelerationX(0);
                this.body.setAccelerationY(0);
            }
            //A
            if(keys.left.isDown) {
                console.log('A key pressed')
                this.body.setAngularVelocity(-200);
                console.log(this.body.angularVelocity);
            //D
            } else if(keys.right.isDown) {
                console.log('D key pressed')
                this.body.setAngularVelocity(200);
            }else{
                this.body.setAngularVelocity(0);
            }
    
            //S
            if(keys.special.isDown) {
                console.log('S key pressed')

            //Q
            } else if(keys.missile.isDown) {
                console.log('Missile sparato')
    
            //E cliccato
            } else if(Phaser.Input.Keyboard.JustDown(keys.laser)) {
                var bullet = this.bullets.get();
        
                if (bullet)
                {
                    bullet.fire(this, 500);
                    console.log('Laser sparato')      
                    bullet.setDepth( this.depth -1 );
                    
                    console.log('LASTFIRED: ' +  this.lastFired)
                    console.log('TIME: ' +  this.time)  
                    
                }
               
                   
            }
        }
        this.scene.physics.world.wrap(this.body, 32);
    }
}