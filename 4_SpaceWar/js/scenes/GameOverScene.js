class GameOverScene extends Phaser.Scene {
    constructor() {
      super({key: 'GameOverScene'});
      
    }
  
    preload(){
        this.load.image("gameover", "assets/images/Gameover.jpg");
    }
  
    create() {
        this.restart = this.add.image(this.game.renderer.width / 2, this.game.renderer.height /2 , "gameover");
        this.restart.setInteractive();
        this.restart.on("pointerup", () => {
            this.scene.start("PlayScene");
        })
    }

  
}