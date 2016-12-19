import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';  //�ѷ�ҳ�����������ģ����ã�����ڲ�ͬModel����һ���ļ����ô��������

import { PostTableComponent } from "../manage/post-table/post-table.component";   //��Ҫ��¯Ŀ¼��ͬ�����⣻
import { CommonTableComponent } from "../manage/common-table/common-table.component"


@NgModule({
    imports : [CommonModule,FormsModule,PaginationModule],
    declarations:[PostTableComponent,CommonTableComponent],       //
    exports:[CommonModule,FormsModule,PaginationModule,PostTableComponent,CommonTableComponent]
})
export class PostShareModule{}