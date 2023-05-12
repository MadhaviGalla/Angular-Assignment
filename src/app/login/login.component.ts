import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {LoginService} from '../login.service';
//import { NotifierModule } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  showNotification: any;
  isPasswordVisible: boolean = false;
 
  isdisabled= true;

  constructor(private router:Router, private srvc:LoginService) { }

  ngOnInit(): void {
   
  }


  loginfrm = new FormGroup({
    uname: new FormControl('',Validators.minLength(5)),
    pwd :new FormControl('',Validators.required)
  })

  CheckUser(){
    var res = this.srvc.ValidateUser(this.loginfrm.value.uname, this.loginfrm.value.pwd);
    
    if(res){
     localStorage.setItem("uname", JSON.stringify(this.loginfrm.value.uname));
     localStorage.setItem("pwd", JSON.stringify(this.loginfrm.value.pwd));
      this.router.navigate(['/CardviewComponent'])
    }
    else
    {
      alert("Please Enter Your Details..")
    }
  }

  passwordVisibility(){
    this.isPasswordVisible=!this.isPasswordVisible
  }

  get username(){
    return this.loginfrm.get('uname');
  }

  get password(){
    return this.loginfrm.get('pwd');
  }
;
 

}
