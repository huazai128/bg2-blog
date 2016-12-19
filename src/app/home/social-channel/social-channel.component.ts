import { Component } from "@angular/core";
import { flyIn } from"../../animations/fly-in"


@Component({
    selector:"app-social",
    templateUrl:"./social-channel.component.html",
    styleUrls:["./social-channel.component.css"],
    animations:[flyIn]

})

export class SocialChannelComponent{
    constructor(){}
}