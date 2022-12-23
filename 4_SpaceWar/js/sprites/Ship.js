class Ship extends Phaser.GameObjects.Sprite{
    constructor(config, energy, life, gravity, planet, specialita, velocita){
        super(config.scene, config.x, config.y, config.texture);
        this.config = config;
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);

        //decellerazione attiva
        this.body.setDamping(true);

        //ship rallenta da sola
        this.body.setDrag(0.5);

        //collisione con i bordi
        this.body.setCollideWorldBounds(true);    

        this.body.allowGravity = false;
        this.body.setCircle(28, 6, 7);

        this.vita = life;
        this.energia = energy;
        this.gravita = gravity;
        this.pianeta = planet;
        this.special = specialita;
        this.vel = velocita;
        this.body.setMaxVelocity(this.vel);
        this.rechargeRate = 0.5;
    }

    assignMissiles(missiles){
        this.missiles = missiles;
    }

    assignLasers(lasers){
        this.lasers = lasers;
    }

    update(keys){

        if(this.vita > 0){
            if(keys == null){

            }else{
                //W
                if(keys.up.isDown) {   
                    this.scene.physics.velocityFromRotation(this.rotation, this.vel, this.body.acceleration);
                } else{
                    this.body.setAccelerationX(0);
                    this.body.setAccelerationY(0);
                }
                //A
                if(keys.left.isDown) {                   
                    this.body.setAngularVelocity(-200);
                //D
                } else if(keys.right.isDown) {
                    this.body.setAngularVelocity(200);
                }else{
                    this.body.setAngularVelocity(0);
                }

                //S
                if(keys.special.isDown) {
                    if(this.special == 1){
                        this.vel = this.vel + 100;
                        this.body.setMaxVelocity(this.vel);
                        this.special -= 1;
                    }else if(this.special == 2){
                        if(this.energia > 0){
                            this.vita = 3;
                            this.energia = 0;
                            this.special -= 2;
                        }
                    }
                //Q
                } else if(Phaser.Input.Keyboard.JustDown(keys.missile)) {
                    var missile = this.missiles.get();

                    if (missile && this.energia > 0.5)
                    {
                        //let offset = new Phaser.Geom.Point(0, -this.body.height / 2);
                        //Phaser.Math.Rotate(offset, this.body.rotation);

                        missile.fire(this, 1000);      
                        this.energia = this.energia - 1;
                    }  
                //E 
                } else if(Phaser.Input.Keyboard.JustDown(keys.laser)) {
                    var laser = this.lasers.get();
            
                    if (laser && this.energia > 0)
                    {
                        let offset = new Phaser.Geom.Point(0, -this.body.height / 2);
                        Phaser.Math.Rotate(offset, this.body.rotation);

                        laser.fire(this, 800);
                        this.energia = this.energia - 0.5;
                    }
                }
            }
        }

        if(this.gravita == 1){
            this.body.gravity = this.body.gravity.normalize().multiply(500, 500);
        
        }else if(this.gravita == 1 && this.pianeta == 1){
            this.body.gravity = new Phaser.Point(planet.body.x - this.body.x, planet.body.y - this.body.y);
            this.body.gravity = this.body.gravity.normalize().multiply(500, 500);
        }
    }
}