import { Component } from "@angular/core";
import { flyIn } from"../../animations/fly-in"
@Component({
    selector:"post-table",
    templateUrl:"./post-table.component.html",
    styleUrls:["./post-table.component.css"],
    animations:[flyIn]
})

export class PostTableComponent{
    public totalItems:number = 64;     //总数据
    public currentPage:number = 1;     //当前显示
    public maxSize:number = 4;          //显示4条数字
    public itemsPerPage:number = 10;   //最多显示10条数据

    public firstText:string="首页";
    public lastText:string="尾页";
    public previousText:string="上一页";
    public nextText:string="下一页";

    private searchText: string;

    public setPage(pageNo:number):void {
        this.currentPage = pageNo;
    }
    public pageChanged(event:any):void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    }
}