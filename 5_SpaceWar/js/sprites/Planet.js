class Planet extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y, config.texture);

        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);

        this.body.allowGravity = false;
        this.body.setCollideWorldBounds(true); 

        this.body.setCircle(92, 7, 7);
        this.body.setImmovable(true);
        this.body.setGravityY(100);

    }

    update(rotazione){
        this.body.rotation += rotazione;
    }
}