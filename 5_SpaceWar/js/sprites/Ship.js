class Ship extends Phaser.GameObjects.Sprite{
    constructor(config, angolo, energy, life){
        super(config.scene, config.x, config.y, config.texture);

        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);

        //decellerazione attiva
        this.body.setDamping(true);

        //ship rallenta da sola
        this.body.setDrag(0.5);

        this.body.setMaxVelocity(200);
        this.body.setCollideWorldBounds(true);    
        
        this.body.angle= this.body.angle - angolo;

        this.vita = life;
        this.energia = energy;
    }
    assignMissiles(missiles){
        this.missiles = missiles;
    }

    assignLasers(lasers){
        this.lasers = lasers;
    }

    update(keys){
        console.log('energy: '+ this.energia);
        if(this.vita > 0){
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
                } else if(Phaser.Input.Keyboard.JustDown(keys.missile)) {
                    var missile = this.missiles.get();
            
                    if (missile && this.energia > 0)
                    {
                        missile.fire(this, 500);      
                        
                        this.energia = this.energia - 1;
    
                        console.log('Missile sparato')
                        //this.nextFire = this.time + this.fireRate;
                        //missile.trackSprite(player, 0, 0, true);
                        
                    }  
        
                //E cliccato
                } else if(Phaser.Input.Keyboard.JustDown(keys.laser)) {
                    var laser = this.lasers.get();
            
                    if (laser && this.energia > 0)
                    {
                        laser.fire(this, 800);     
                        
                        this.energia = this.energia - 0.5;
    
                        console.log('Laser sparato') 
                        //missile.trackSprite(player, 0, 0, true);
                        
                    }
                     
                }
            }
        }
        
        //this.scene.physics.world.wrap(this.body, 32);
    }
}