import { Component } from "@angular/core";
import { flyIn } from"../../animations/fly-in"

@Component({
    selector:"app-online",
    templateUrl:"./online-contact.component.html",
    styleUrls:["./online-contact.component.css"],
    animations:[flyIn]

})

export class OnlinContactComponent{
    constructor(){}
}