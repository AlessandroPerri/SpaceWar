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

  }

  create() {
    //Metto bg e title
    this.add.image(0, 0, "background").setOrigin(0,0);
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, "title").setDepth(1);

    //Aggiungo i pulsanti
    this.playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "play");
    this.optionsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 85, "options");
    this.instructionsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 170, "instructions");
    this.exitButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 255, "exit");

    //play
    this.playButton.setInteractive();
    this.playButton.on("pointerup", () => {
      this.scene.start("PlayScene");
    })

    //option
    this.optionsButton.setInteractive();
    this.optionsButton.on("pointerup", () => {
      this.scene.start("OptionsScene");
    })

    //instructions
    this.instructionsButton.setInteractive();
    this.instructionsButton.on("pointerup", () => {
      this.scene.start("InstructionsScene");
    })

    //exit
    this.exitButton.setInteractive();
    this.exitButton.on("pointerup", () => {
      window.close();
    })
    
  }

  update(){
    //console.log(this.game.config._playerShip);
  }

}