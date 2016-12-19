import { RouterModule } from "@angular/router";

//组件
import { HomeComponent } from "./home/home.component";
import { PostMainComponent } from "./post/post-main/post-main.component";
import { UserLoginComponent } from "./user/user-login/user-login.component"
import { UserForgetComponent } from "./user/user-forget/user-forget.component"
import { UserRegisterComponent } from "./user/user-register/user-register.component";

const appRoutes = [
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"detail/:id",component:PostMainComponent},
    {path:"user",loadChildren:'app/user/user.module'},
    {path:"login",component:UserLoginComponent},
    {path:"forgetpwd",component:UserForgetComponent},
    {path:"register",component:UserRegisterComponent},
    {path:"manage",loadChildren:'app/manage/manage.module'},
];


export default RouterModule.forRoot(appRoutes);


