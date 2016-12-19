import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"

import { ShareModule } from "../share/share.module"       //���빲������ڲ�ͬ��Module�����ó��������
import { PostShareModule } from "../share/post.module";

//ģ�����
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
    providers:[  //���ݷ���
    ]
})

export default class UserModule{}  //����ʹ��default