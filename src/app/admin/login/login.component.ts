import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AdminServiceService } from '../services/admin-service.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _admin:AdminServiceService,private _router:Router) { }
  adminLogin:FormGroup;
  isShowMessage:boolean = false;
  errMessage:String = null;
  errClass:String;
  ngOnInit() {
  	this.adminLogin = new FormGroup({
  		email:new FormControl('',[Validators.required]),
  		password: new FormControl('',[Validators.required])
  	});
  }
  onSubmit(loginForm,form){
    this._admin.login(loginForm)
        .then((data)=>{
          localStorage.setItem("username",data.user.email);
          form.reset();
          this.isShowMessage = true;
          this.errMessage = "Logged in successfully!!";
          this.errClass = "success";
          setTimeout(()=>this._router.navigate(["./adminpanel/dashboard"]),2000);
        })
        .catch((err)=>{
            this.isShowMessage = true;
            this.errClass = "danger";
            this.errMessage = "Entered wrong username or password.";
        });
  }

}
