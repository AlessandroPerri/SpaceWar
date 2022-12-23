class PlayScene extends Phaser.Scene {
    constructor() {
      super({key: 'PlayScene'});
    }
    preload(){
        this.load.image("background", "assets/images/background.png");
    
        this.load.image("back", "assets/images/ButtonBack.png");
    
        this.load.image("singlePlayer", "assets/images/ButtonXsinglePlayer.png");
    
        this.load.image("dualPlayer", "assets/images/ButtonDualPlayer.png");
    
      }
    
      create() {
        //Metto bg
        this.add.image(0, 0, "background").setOrigin(0,0);

        //Aggiungo i bottoni  
        this.singleButton = this.add.image(this.game.renderer.width / 2 - 200, this.game.renderer.height / 2 - 50 , "singlePlayer");
        this.dualButton = this.add.image(this.game.renderer.width / 2 + 200, this.game.renderer.height / 2 - 50, "dualPlayer");
        this.backButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 200, "back");

        //SinglePlayer
        this.singleButton.setInteractive();
        this.singleButton.on("pointerup", () => {
          this.scene.start("SinglePlayerScene");
        })
    
    
        //DualPlayer
        this.dualButton.setInteractive();
        this.dualButton.on("pointerup", () => {
            this.scene.start("DualPlayerScene");
        })
    
    
        //Back
        this.backButton.setInteractive();
        this.backButton.on("pointerup", () => {
            this.scene.start("MenuGame");
        })
    
      }

      update(){
        
        //console.log("setting up playerShip: " + this.registry.get('playerShip'));
      }      
}