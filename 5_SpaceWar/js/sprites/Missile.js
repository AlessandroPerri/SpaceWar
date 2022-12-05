var Missile = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

    function Missile (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'missile');	
        this.setBlendMode(1);
        this.setDepth(1);
    },

    fire: function (ship, speed)
    {
        this.setActive(true);
        this.setVisible(true);

        this.rotation = ship.rotation;

        const width = ship.width / 2 + this.width / 2;
        const posizione = new Phaser.Geom.Point(width, 0);
        Phaser.Math.Rotate(posizione, ship.rotation);
        this.setPosition(ship.x + posizione.x, ship.y + posizione.y);

        const angle = Phaser.Math.DegToRad(ship.body.rotation); // si può ruotare solo con i radianti
        this.body.world.scene.physics.velocityFromRotation(angle, speed, this.body.velocity);

        this.body.setCircle(1, 23, 10);

    },
});
    