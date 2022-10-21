class SpaceshipScene extends Phaser.Scene {
    constructor() {
      super({key: 'SpaceshipScene'});
    }
    preload(){
        this.load.image("background", "assets/images/background.png");
    
        this.load.image("back", "assets/images/ButtonBack.png");
    
        this.load.image("btShip1", "assets/images/ButtonShip1.png");

        this.load.image("btShip2", "assets/images/ButtonShip2.png");

        this.load.image("btShip1Selected", "assets/images/ButtonShip1Selected.png");

        this.load.image("btShip2Selected", "assets/images/ButtonShip2Selected.png");
    
      }
      create() {
        //Metto bg
        this.add.image(0, 0, "background").setOrigin(0,0);

        //Aggiungo i bottoni  
        this.ship1Button = this.add.image(this.game.renderer.width / 2 - 200, this.game.renderer.height / 2 - 50 , "btShip1");
        this.ship2Button = this.add.image(this.game.renderer.width / 2 + 200, this.game.renderer.height / 2 - 50, "btShip2");
        
        this.ship1ButtonSelected =  this.add.image(this.game.renderer.width / 2 - 200, this.game.renderer.height / 2 - 50 , "btShip1Selected");
        this.ship2ButtonSelected =  this.add.image(this.game.renderer.width / 2 + 200, this.game.renderer.height / 2 - 50, "btShip2Selected");

        this.backButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 200, "back");

        //Ship1Selected
        this.ship1ButtonSelected.setInteractive();
        this.ship1ButtonSelected.visible = false;
        
        //Ship1
        this.ship1Button.setInteractive();
        this.ship1Button.on("pointerdown", () => {
          this.registry.set('playerShip', 1);
          console.log('ship 1 clicked');
        })

        //Ship2Selected
        this.ship2ButtonSelected.setInteractive();
        this.ship2ButtonSelected.visible = false;

        //Ship2
        this.ship2Button.setInteractive();
        this.ship2Button.on("pointerdown", () => {
          this.registry.set('playerShip', 2);
          console.log(this.registry.get('playerShip'));
          console.log('ship 2 clicked');
        })

        console.log(this.registry.get('playerShip'));
        //Back
        this.backButton.setInteractive();
        this.backButton.on("pointerup", () => {
            console.log('back clicked');
            this.scene.start("OptionsScene");
        })
      }

      update() {
        if( this.registry.get('playerShip') == 1){
          //Ship1Selected
          this.ship1ButtonSelected.visible = true;
          this.ship1Button.visible = false;
          this.ship2Button.visible = true;
          this.ship2ButtonSelected.visible = false;

        }else if(this.registry.get('playerShip') == 2){
          //Ship1Selected
          this.ship2ButtonSelected.visible = true;
          this.ship2Button.visible = false;
          this.ship1Button.visible = true;
          this.ship1ButtonSelected.visible = false;

        }
        if ( typeof this.registry.get('playerShip') === 'undefined'){
          this.registry.set('playerShip', 1);
        }else{
          console.log( this.registry.get('playerShip'));
        }
      }     
}