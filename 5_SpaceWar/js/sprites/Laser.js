class Laser extends Phaser.Physics.Arcade.Image{
	constructor(config) {
		super({
		  key: "Laser"
		})
	}
	preload(){
        this.load.image("laser", "assets/images/Laser.png"); 
    }
	bullet(scene){
        Phaser.Physics.Arcade.Image.call(this, scene, 0, 0, 'laser');
        
		this.setBlendMode(1);
        this.setDepth(1);

        this.speed = 800;
        this.lifespan = 1000;

        this._temp = new Phaser.Math.Vector2();
    }
	fire(ship){
		this.lifespan = 600;

        this.setActive(true);
        this.setVisible(true);
        this.setAngle(ship.body.rotation);
        this.setPosition(ship.x, ship.y);

        this.body.reset(ship.x, ship.y);
        this.body.setSize(10, 10, true);

        var angle = Phaser.Math.DegToRad(ship.body.rotation);
		this.scene.physics.velocityFromRotation(angle, this.speed, this.body.velocity);

        this.body.velocity.x *= 2;
        this.body.velocity.y *= 2;
		
	}
	kill(){
		this.setActive(false);
        this.setVisible(false);
        this.body.stop();
	}
	update(time, delta){
		this.lifespan -= delta;

        if (this.lifespan <= 0)
        {
            this.kill();
        }
	}
}
