class Menu extends Phaser.Scene {
  constructor() {
    super({key: 'MenuGame'});
  }

  preload(){
    this.load.image("background", "assets/images/background.png");

    this.load.image("ship1", "assets/images/ship1.png");

    this.load.image("ship2", "assets/images/ship2.png");

    this.load.image("title", "assets/images/Title.png");

    this.load.image("play", "assets/images/ButtonPlay.png");

    this.load.image("options", "assets/images/ButtonOptions.png");

    this.load.image("instructions", "assets/images/ButtonInstructions.png");

    this.load.image("exit", "assets/images/ButtonExit.png");

    /*
    let loadingBar = this.add.graphics({
      fillStyle:{
        color: 0xffffff
      }
    })
    */
  }

  create() {
    //this.background = this.add.image(0, 0, "background").setOrigin(0,0);

    //Metto bg e title
    this.add.image(0, 0, "background").setOrigin(0,0);
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, "title").setDepth(1);

    //Aggiungo i bottoni
    let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "play");
    let optionsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 85, "options");
    let instructionsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 170, "instructions");
    let exitButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 255, "exit");


    //play
    playButton.setInteractive();
    playButton.on("pointerup", () => {
      this.scene.start("PlayScene");
    })


    //option
    optionsButton.setInteractive();
    optionsButton.on("pointerup", () => {
      this.scene.start("OptionsScene");
    })


    //instructions
    instructionsButton.setInteractive();
    instructionsButton.on("pointerup", () => {
      this.scene.start("InstructionsScene");
    })


    //exit
    exitButton.setInteractive();
    exitButton.on("pointerup", () => {
      window.close();
    })
    

   

  }

}