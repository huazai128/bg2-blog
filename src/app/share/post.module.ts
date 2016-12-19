import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';  //把分页组件当做公共模块调用；解决在不同Model下用一个文件引用错误的问题

import { PostTableComponent } from "../manage/post-table/post-table.component";   //不要烤炉目录不同的问题；
import { CommonTableComponent } from "../manage/common-table/common-table.component"


@NgModule({
    imports : [CommonModule,FormsModule,PaginationModule],
    declarations:[PostTableComponent,CommonTableComponent],       //
    exports:[CommonModule,FormsModule,PaginationModule,PostTableComponent,CommonTableComponent]
})
export class PostShareModule{}