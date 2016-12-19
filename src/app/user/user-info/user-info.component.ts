import { Component } from "@angular/core";
import { flyIn } from"../../animations/fly-in"

@Component({
    selector:"app-user-info",
    templateUrl:"./user-info.component.html",
    styleUrls:["./user-info.component.css"],
    animations:[flyIn]
})

export class UserInfoComponent{

}