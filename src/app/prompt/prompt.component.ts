
//������ʾЧ��
import { Component,Input } from "@angular/core";

@Component({
    selector:"app-prompt",
    templateUrl:"./prompt.component.html",
    styleUrls:["./prompt.component.css"]
})

export  class PromptComponent{
    @Input()message = {body:"",type:""};
    //���巽����
    setMessage(body,type,time = 3000){
        this.message.body = body;
        this.message.type = type;
        setTimeout(() => {
            this.message.body = "";
            this.message.type = "";
        },time)
    }
}