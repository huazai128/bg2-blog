import { Component } from "@angular/core";
import { flyIn } from"../../animations/fly-in"

@Component({
    selector:"app-profile",
    templateUrl:"./user-profile.component.html",
    styleUrls:["./user-profile.component.css"],
    animations:[flyIn]
})

export class UserProfileComponent{

}