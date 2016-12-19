//解决不同的Modul下代码公用出错的问题
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { UserInfoComponent } from "../user/user-info/user-info.component";   //公用模块

@NgModule({
    imports:[CommonModule],
    declarations:[UserInfoComponent],
    exports:[CommonModule,FormsModule,UserInfoComponent]     //输出
})

export class ShareModule{}