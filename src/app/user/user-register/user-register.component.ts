import { Component,OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';  //form表单组件
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable"               //Observable:不具备多路推送数据能力
import { Subject } from "rxjs/Subject";                       //Subject是一种可以多路推送的可观察对象；Subject可以向多个Observable多路推送数据；使Observable单路推送变成多路推送
import { flyIn } from"../../animations/fly-in";
import { UserService } from "../../service/user.service/user.service"; //数据服务

@Component({
    selector:"user-register",
    templateUrl:"./user-register.component.html",
    styleUrls:["./user-register.component.css"],
    animations:[flyIn]
})

//需要优化,还要改进
export class UserRegisterComponent implements OnInit{
    //form表单
    private reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;  //手机验证
    private pas = /^[A-Za-z]{1}[0-9A-Za-z_]{5,25}$/;
    public addUserForm:FormGroup;
    private name = new FormControl("",Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(26)]));
    private phone = new FormControl("",Validators.compose([Validators.required,Validators.pattern(this.reg)]));
    private email = new FormControl("",Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]));
    private password = new FormControl("",Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(26),Validators.pattern(this.pas)]));
    private repassword = new FormControl("",Validators.compose([Validators.required,Validators.minLength(6), Validators.maxLength(26)]));
    public flag:boolean;
    public flag1:boolean;
    //构造函数
    constructor(private userService:UserService,private formBuilder:FormBuilder,private router:Router){}
    //用户注册
    addUser(){
        let data = this.addUserForm.value;
        this.userService.addUser(data).subscribe( res => {
            this.addUserForm.reset();//重置表单
            this.router.navigate(['/login']);//登录页面
        });
    }
    //验证用户名是否存在;
    nameExist(name:string){
        //问题减少请求次数；
        this.userService.getName(name).subscribe( data => {
            this.flag = data.success;
        });
    }
    //验证email是否存在
    emailExist(email:string){
        this.userService.getEmail(email).subscribe( data => {
            console.log(data);
            this.flag1 = data.success;
        });
    }
    //初始化加载
    ngOnInit(){
        this.addUserForm = this.formBuilder.group({   //forms表单初始化赋值
            name:this.name,
            phone:this.phone,
            email:this.email,
            password:this.password,
            repassword:this.repassword
        })
    }
}