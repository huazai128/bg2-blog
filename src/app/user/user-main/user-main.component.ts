import { Component } from "@angular/core";
import { flyIn } from"../../animations/fly-in"


@Component({
    selector:"user-main",
    templateUrl:"./user-main.component.html",
    styleUrls:["./user-main.component.css"],
    animations:[flyIn]
})

export class UserMainComponent{

}