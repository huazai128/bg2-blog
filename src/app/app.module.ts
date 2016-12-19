import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';             //form表单组件
import { HttpModule } from '@angular/http';               //http组件
import { RouterModule } from "@angular/router";           //路由组件
import { CommonModule } from '@angular/common';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';       //分页组件\
import { ShareModule } from "./share/share.module";     //解决在不同Model下引用的问题

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { PostListComponent } from "./post/postlist/post-list.component";
import { OnlinContactComponent } from "./home/online-contact/online-contact.component";
import { SocialChannelComponent } from "./home/social-channel/social-channel.component";
import { SiteStatComponent } from "./sitestat/sitestat.component";
import { PostMainComponent } from "./post/post-main/post-main.component";
import { PostDetailComponent } from "./post/post-detail/post-detail.component";
import { AddCommentComponent } from "./comment/add-comment/add-comment.component";
import { UserLoginComponent } from "./user/user-login/user-login.component";
import { UserForgetComponent } from "./user/user-forget/user-forget.component"
import { UserRegisterComponent } from "./user/user-register/user-register.component";
import { PromptComponent } from "./prompt/prompt.component";    //提示信息

import { UserService } from "./service/user.service/user.service";      //数据服务

//路由
import appRoutes from "./app.router";

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      PostListComponent,
      OnlinContactComponent,
      SocialChannelComponent,
      SiteStatComponent,
      PostMainComponent,
      PostDetailComponent,
      AddCommentComponent,
      UserLoginComponent,
      UserForgetComponent,
      UserRegisterComponent,
      PromptComponent
  ],
  imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule,
      PaginationModule,
      ShareModule,
      ReactiveFormsModule,                    //这个必须要注入不然form相应的组件使用会报错；
      appRoutes
  ],
  providers: [UserService,PromptComponent],                 //数据服务的注入
  bootstrap: [AppComponent]
})


export class AppModule { }
