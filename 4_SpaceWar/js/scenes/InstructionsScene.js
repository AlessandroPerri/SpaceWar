class InstructionsScene extends Phaser.Scene {
    constructor() {
      super({key: 'InstructionsScene'});
    }
    preload(){
        this.load.image("background", "assets/images/background.png");
    
        this.load.image("back", "assets/images/ButtonBack.png");
    
        this.load.image("tableInstructions", "assets/images/TableInstructions.png");
    
      }
    
      create() {
        //this.background = this.add.image(0, 0, "background").setOrigin(0,0);
    
        //Metto bg
        this.add.image(0, 0, "background").setOrigin(0,0);

        this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 100, "tableInstructions");

        //Aggiungo i bottoni  
        this.backButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 200, "back");
    
        
      }
      update(){
        //Back
        this.backButton.setInteractive();
        this.backButton.on("pointerup", () => {
            this.scene.start("MenuGame");
        })
      }
}