import { Component,OnInit } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { UserService } from "../../service/user.service/user.service"
import { flyIn } from"../../animations/fly-in";
import { Observable } from "rxjs/Observable"               //Observable:不具备多路推送数据能力
import { Subject } from "rxjs/Subject";                       //Subject是一种可以多路推送的可观察对象；Subject可以向多个Observable多路推送数据；使Observable单路推送变成多路推送

@Component({
  selector:"app-login",
    templateUrl:"./user-login.component.html",
    styleUrls:["./user-login.component.css"],
    animations:[flyIn]
})

export class UserLoginComponent implements OnInit{
    public loginUser:FormGroup;
    //构造函数
    constructor(private router:Router, private route:ActivatedRoute,private formBuilder:FormBuilder,private userService:UserService){}
    //初始化生命周围钩子
    ngOnInit(){
        this.loginUser = this.formBuilder.group({
            name:["",Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(26)])],
            password:["",Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(26)])]
        })
    }
    //忘记密码
    forgetPwd():void{
        this.router.navigateByUrl("forgetpwd");
    }
    //登录
    login(){
        this.userService.login(this.loginUser.value).subscribe( res => {
            var data = res.json();
            if(!data.success){
                this.router.navigate(["login"]);     //登录页面
            }else{
                localStorage.setItem("user",data);  //使用localStorage进行持久化存储；
                this.router.navigate(["home"]);      //接受的是一个数组
            }
        })
    }
}