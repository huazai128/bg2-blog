import { Component } from "@angular/core";
import { flyIn } from"../../animations/fly-in"

@Component({
    selector:"app-post-main",
    templateUrl:"./post-main.component.html",
    styleUrls:["./post-main.component.css"],
    animations:[flyIn]
})

export class PostMainComponent{

}