class Planet extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y, config.texture);

        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);

        this.body.allowGravity = false;
        this.body.setCircle(85, 7, 7);
        this.body.setImmovable(true);
    }

    update(rotazione){
        this.body.rotation += rotazione;
    }
}