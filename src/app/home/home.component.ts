import { Component } from "@angular/core";
import { flyIn } from "../animations/fly-in";  //动画

@Component({
    selector:"home-app",
    templateUrl:"./home.component.html",
    styleUrls:["home.component.scss"],
    animations:[flyIn]
})

export class HomeComponent{
    constructor(){}

}
