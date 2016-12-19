import { Component } from "@angular/core";
import { flyIn } from"../../animations/fly-in"

@Component({
    selector:"user-forget",
    templateUrl:"./user-forget.component.html",
    styleUrls:["./user-forget.component.css"],
    animations:[flyIn]

})

export class UserForgetComponent{}