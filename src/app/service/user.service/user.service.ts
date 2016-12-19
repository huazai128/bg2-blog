import { Injectable } from "@angular/core";
import { Http,Headers,RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class UserService{
    //设置响应头
    public headers = new Headers({"Content-Type":"application/json","charset":"UTF-8"});
    public potions = new RequestOptions({headers:this.headers});
    private url:String = "http://localhost:3000";
    //构造函数继承
    constructor(private http:Http){}
    //添加用户
    addUser(data){
        return this.http.post(this.url+"/register",JSON.stringify(data),this.potions);
    }
    //验证用户名是否存在
    getName(name){
        return this.http.get(this.url+"/name?name="+name).map( res => {
            return res.json();
        });
    }
    //验证email是否存在
    getEmail(email){
        return this.http.get(this.url+"/email?email="+email).map( res => {
            return res.json();
        })
    }
    //登录
    login(data){
        return this.http.post(this.url+"/login",JSON.stringify(data),this.potions);
    }
    //退出
    logout(){
        return this.http.get(this.url+"/logout").map(res => {
            return res.json();
        })
    }
}