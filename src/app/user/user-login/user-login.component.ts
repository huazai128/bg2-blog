import { Component,OnInit } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { UserService } from "../../service/user.service/user.service"
import { flyIn } from"../../animations/fly-in";
import { Observable } from "rxjs/Observable"               //Observable:���߱���·������������
import { Subject } from "rxjs/Subject";                       //Subject��һ�ֿ��Զ�·���͵Ŀɹ۲����Subject��������Observable��·�������ݣ�ʹObservable��·���ͱ�ɶ�·����

@Component({
  selector:"app-login",
    templateUrl:"./user-login.component.html",
    styleUrls:["./user-login.component.css"],
    animations:[flyIn]
})

export class UserLoginComponent implements OnInit{
    public loginUser:FormGroup;
    //���캯��
    constructor(private router:Router, private route:ActivatedRoute,private formBuilder:FormBuilder,private userService:UserService){}
    //��ʼ��������Χ����
    ngOnInit(){
        this.loginUser = this.formBuilder.group({
            name:["",Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(26)])],
            password:["",Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(26)])]
        })
    }
    //��������
    forgetPwd():void{
        this.router.navigateByUrl("forgetpwd");
    }
    //��¼
    login(){
        this.userService.login(this.loginUser.value).subscribe( res => {
            var data = res.json();
            if(!data.success){
                this.router.navigate(["login"]);     //��¼ҳ��
            }else{
                localStorage.setItem("user",data);  //ʹ��localStorage���г־û��洢��
                this.router.navigate(["home"]);      //���ܵ���һ������
            }
        })
    }
}