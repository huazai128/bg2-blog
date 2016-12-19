import { RouterModule } from "@angular/router";

import { ManageMainComponent } from "./manage-main/manage-main.component";
import { PostTableComponent } from "./post-table/post-table.component";
import { CommonTableComponent } from "./common-table/common-table.component";
import { UserTableComponent } from "./user-table/user-table.component";
import { TagTableComponent } from "./tag-table/tag-table.component";
import { SysParamComponent } from "./sys-param/sys-param.component";

const manageRoutes =[
    {
        path:"",
        component:ManageMainComponent,
        children:[
            {path:"",component:PostTableComponent},
            {path:"posttable",component:PostTableComponent},
            {path:"common",component:CommonTableComponent},
            {path:"usertable",component:UserTableComponent},
            {path:"tagtable",component:TagTableComponent},
            {path:"system",component:SysParamComponent}
        ]
    }
]

export default RouterModule.forChild(manageRoutes);