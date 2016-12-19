import { RouterModule } from "@angular/router"

import { UserMainComponent } from "./user-main/user-main.component";
import { PostWriteComponent } from "../post/post-write/post-writer.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { PostTableComponent } from "../manage/post-table/post-table.component";
import { CommonTableComponent } from "../manage/common-table/common-table.component";


const userRoutes = [
    {
        path:"",component:UserMainComponent,
        children:[
            {path:"",component:PostWriteComponent},
            {path:"write",component:PostWriteComponent},
            {path:"profile",component:UserProfileComponent},
            {path:"posttable",component:PostTableComponent},
            {path:"common",component:CommonTableComponent}
        ]
    }
]

export default RouterModule.forChild(userRoutes);