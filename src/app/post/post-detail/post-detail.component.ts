import { Component } from "@angular/core";
import { flyIn } from"../../animations/fly-in"

@Component({
    selector:"post-detail",
    templateUrl:"./post-detail.component.html",
    styleUrls:["./post-detail.component.css"],
    animations:[flyIn]
})

export class  PostDetailComponent{
    constructor(){}
}