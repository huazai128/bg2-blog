import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostShareModule } from "../share/post.module";
import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ManageMainComponent } from "./manage-main/manage-main.component";
import { UserTableComponent } from "./user-table/user-table.component";
import { TagTableComponent } from "./tag-table/tag-table.component";
import { SysParamComponent } from "./sys-param/sys-param.component";



import manageRoutes from "./manage.router";

@NgModule({
    declarations:[
        ManageMainComponent,
        UserTableComponent,
        TagTableComponent,
        SysParamComponent
    ],
    imports:[
        CommonModule,
        AccordionModule,
        PostShareModule,
        manageRoutes
    ],
    exports:[
        ManageMainComponent
    ],
    providers:[

    ]
})

export default class ManageModule{}