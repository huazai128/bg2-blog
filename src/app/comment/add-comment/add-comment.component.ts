import { Component } from "@angular/core";
import { flyIn } from"../../animations/fly-in"

@Component({
    selector:"app-comment",
    templateUrl:"./add-comment.component.html",
    styleUrls:["./add-comment.component.css"],
    animations:[flyIn]
})

export class  AddCommentComponent{

}