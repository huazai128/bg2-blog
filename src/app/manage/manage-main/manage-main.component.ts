import { Component } from "@angular/core";
import { flyIn } from"../../animations/fly-in"

@Component({
    selector:"manage-main",
    templateUrl:"./manage-main.component.html",
    styleUrls:["./manage-main.component.css"],
    animations:[flyIn]

})

export class ManageMainComponent{}