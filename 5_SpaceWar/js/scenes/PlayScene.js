class PlayScene extends Phaser.Scene {
    constructor() {
      super({key: 'PlayScene'});
    }
    preload(){
        this.load.image("background", "assets/images/background.png");
    
        this.load.image("back", "assets/images/ButtonBack.png");
    
        this.load.image("singlePlayer", "assets/images/ButtonSinglePlayer.png");
    
        this.load.image("dualPlayer", "assets/images/ButtonDualPlayer.png");
    
      }
    
      create() {
        //this.background = this.add.image(0, 0, "background").setOrigin(0,0);
    
        //Metto bg
        this.add.image(0, 0, "background").setOrigin(0,0);

        //Aggiungo i bottoni  
        let singleButton = this.add.image(this.game.renderer.width / 2 - 200, this.game.renderer.height / 2 - 50 , "singlePlayer");
        let dualButton = this.add.image(this.game.renderer.width / 2 + 200, this.game.renderer.height / 2 - 50, "dualPlayer");
        let backButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 200, "back");
    
        //SinglePlayer
        singleButton.setInteractive();
        singleButton.on("pointerup", () => {
            //this.scene.start("SinglePlayMode");
        })
    
    
        //DualPlayer
        dualButton.setInteractive();
        dualButton.on("pointerup", () => {
            //this.scene.start("DualPlayMode");
        })
    
    
        //Back
        backButton.setInteractive();
        backButton.on("pointerup", () => {
            this.scene.start("MenuGame");
        })
      }
}