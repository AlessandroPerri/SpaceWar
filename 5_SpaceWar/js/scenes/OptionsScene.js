class OptionsScene extends Phaser.Scene {
    constructor() {
      super({key: 'OptionsScene'});
    }
    preload(){
        this.load.image("background", "assets/images/background.png");
    
        this.load.image("back", "assets/images/ButtonBack.png");
    
        this.load.image("gravity", "assets/images/ButtonGravity.png");
    
        this.load.image("planetBt", "assets/images/ButtonPlanet.png");

        this.load.image("spaceship", "assets/images/ButtonSpaceship.png");

        this.load.image("gravitySelected", "assets/images/ButtonGravitySelected.png");

        this.load.image("planetSelected", "assets/images/ButtonPlanetSelected.png");
    
      }
    
      create() {
        //Metto bg
        this.add.image(0, 0, "background").setOrigin(0,0);
    
        //Aggiungo i bottoni  
        this.gravityButton = this.add.image(this.game.renderer.width / 2 - 300, this.game.renderer.height / 2 - 50 , "gravity");
        this.planetButton  = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 50, "planetBt");
        
        this.gravityButtonSelected = this.add.image(this.game.renderer.width / 2 - 300, this.game.renderer.height / 2 - 50 , "gravitySelected");
        this.planetButtonSelected = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 50, "planetSelected");

        this.spaceShipButton  = this.add.image(this.game.renderer.width / 2 + 300, this.game.renderer.height / 2 - 50, "spaceship");
        this.backButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 200, "back");
    
        //GravitySelected
        this.gravityButtonSelected.setInteractive();
        this.gravityButtonSelected.visible = false;
        this.gravityButtonSelected.on("pointerdown", () => {   
          //this.registry.set('gravityIndex', 0);
          this.game.config._gravityIndex = 0;
        })

        //Gravity
        this.gravityButton.setInteractive();
        this.gravityButton.on("pointerdown", () => {   
          this.game.config._gravityIndex = 1;
          //this.registry.set('gravityIndex', 1);
        })
    
    
        //PlanetSelected
        this.planetButtonSelected.setInteractive();
        this.planetButtonSelected.visible = false;
        this.planetButtonSelected.on("pointerdown", () => {
          this.game.config._planetIndex= 0;
          //this.registry.set('planetIndex', 0);
        })

        //Planet
        this.planetButton.setInteractive();
        this.planetButton.on("pointerdown", () => {
           this.game.config._planetIndex= 1;
          //this.registry.set('planetIndex', 1);
        })
    
        
        //SpaceShip
        this.spaceShipButton.setInteractive();
        this.spaceShipButton.on("pointerup", () => {
            this.scene.start("SpaceshipScene");
        })
    
        //Back
        this.backButton.setInteractive();
        this.backButton.on("pointerup", () => {
            this.scene.start("MenuGame");
        })

      }

      update() {       
        //gravity
        if(this.game.config._gravityIndex == 1){
          //GravitySelected
          this.gravityButtonSelected.visible = true;
          this.gravityButton.visible = false;

        }else if(this.game.config._gravityIndex == 0){
          //GravitySelected
          this.gravityButtonSelected.visible = false;
          this.gravityButton.visible = true;
        }

        //planet
        if(this.game.config._planetIndex == 1){
          //PlanetSelected
          this.planetButtonSelected.visible = true;
          this.planetButton.visible = false;

        }else if(this.game.config._planetIndex == 0){
          //PlanetSelected
          this.planetButtonSelected.visible = false;
          this.planetButton.visible = true;
        }
      }     
}