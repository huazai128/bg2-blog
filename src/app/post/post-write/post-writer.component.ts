import { Component } from "@angular/core";
import { flyIn } from"../../animations/fly-in"


@Component({
    selector:"post-write",
    templateUrl:"./post-writer.component.html",
    styleUrls:["./post-writer.component.css"],
    animations:[flyIn]
})

export class PostWriteComponent{
    public write = {};
}