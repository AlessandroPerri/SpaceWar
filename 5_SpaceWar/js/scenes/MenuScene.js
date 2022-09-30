import { CST } from "../CST"
export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.MENU
        })
    }
    init(data){
        console.log(data);
        console.log("I GOT IT")
    }
    create(){
        this.scene.start(CST.SCENES.MENU);
    }
}