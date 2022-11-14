var Laser = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

    function Missile (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'laser');	
        this.setBlendMode(1);
        this.setDepth(1);
        this.durata = 1000;
    },

    fire: function (ship, speed)
    {
        this.durata = 1000;

        this.setActive(true);
        this.setVisible(true);

        this.setAngle(ship.body.rotation);
        this.setPosition(ship.x, ship.y);

        this.body.reset(ship.x, ship.y);
        this.body.setSize(this.width, this.height, true);

        var angle = Phaser.Math.DegToRad(ship.body.rotation);
        this.scene.physics.velocityFromRotation(angle, speed, this.body.velocity);

    },

    update: function (time, delta)
    {
        this.durata -= delta;

        if (this.durata <= 0)
        {
            this.setActive(false);
            this.setVisible(false);
            this.body.stop();
        }
        
    }

});
    