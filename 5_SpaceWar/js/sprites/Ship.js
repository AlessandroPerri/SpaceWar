class Ship extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y, config.texture);

        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        /*
        this.body.allowDrag = true;
        this.body.angularDrag = 150;
        this.body.setDamping(true);
        this.body.setDrag(0.99);
        this.body.setMaxVelocity(200);
        this.body.acceleration = 50;
        */
        this.body.setDamping(true);
        this.body.setDrag(1);
        this.body.setMaxVelocity(200);
        this.body.setCollideWorldBounds(true);

       
    }
    create(){
        this.createLaser();
    }
    createLaser(){
        this.laser = new Laser();
    }
    update(keys){
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
    
            //E
            } else if(keys.laser.isDown) {
                var bullet = this.laser.get();
        
                if (bullet)
                {
                    this.bullet.fire(this.body);
                    this.bullet.setDepth( this.depth -1 );
                    console.log('Laser sparato')
                }
                
            }
        }
        this.scene.physics.world.wrap(this.body, 32);
    }
}