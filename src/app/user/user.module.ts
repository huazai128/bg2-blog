import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"

import { ShareModule } from "../share/share.module"       //代码共享，解决在不同的Module下引用出错的问题
import { PostShareModule } from "../share/post.module";

//模块组件
import { UserMainComponent } from "./user-main/user-main.component";
import { PostWriteComponent } from "../post/post-write/post-writer.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";


import userRoutes from "./user.routes";

@NgModule({
    declarations:[
        UserMainComponent,
        PostWriteComponent,
        UserProfileComponent
    ],
    imports:[
        CommonModule,
        PostShareModule,
        ShareModule,
        userRoutes
    ],
    exports:[
        UserMainComponent
    ],
    providers:[  //数据服务
    ]
})

export default class UserModule{}  //必须使用default