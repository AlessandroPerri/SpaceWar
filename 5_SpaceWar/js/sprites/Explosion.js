class Explosion extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y, config.texture);

        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.body.setImmovable(true);

    }
    update(){}

}