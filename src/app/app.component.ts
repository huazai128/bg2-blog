import { Component,HostListener,ElementRef,Renderer,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PromptComponent } from "./prompt/prompt.component";

//HostListener:用于事件监听相当于on
//ElementRef;表示元素，
//Renderer：在元素上的样式渲染
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    public user:any;
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer,
        private router:Router,
        private routerActivate:ActivatedRoute,
        private toast:PromptComponent
    ){
        renderer.listen(elementRef.nativeElement,"click",(e)=>{    //监听页面上所有点击事件
            //console.log(e);
        });

    }
    toggle(button):void{
        //console.log(button);
    }
    @HostListener("click") onClick(e){      //用于事件的触发
        console.log(e)
    }
    //初始化加载；
    ngOnInit(){
        this.toast.setMessage("登录成功","success")
    }
    logout(){

    }
}
