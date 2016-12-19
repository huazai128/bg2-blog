import { Component } from "@angular/core";
import { flyIn } from"../../animations/fly-in"

@Component({
    selector:"app-system",
    templateUrl:"./sys-param.component.html",
    styleUrls:["./sys-param.component.css"],
    animations:[flyIn]

})

export class SysParamComponent{}