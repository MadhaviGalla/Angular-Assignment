import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router:Router, private srvc:LoginService) { }

  ngOnInit(): void {
   
  }

  loginfrm = new FormGroup({
    uname: new FormControl(),
    pwd :new FormControl()
  })

  CheckUser(){
    var res = this.srvc.ValidateUser(this.loginfrm.value.uname, this.loginfrm.value.pwd);
    if(res){
      localStorage.setItem("uname", this.loginfrm.value["uname"]);
      localStorage.setItem("pwd", this.loginfrm.value["pwd"]);
      this.router.navigate(['/CardviewComponent'])
    }
    else
    {
      alert("Please Enter Your Details..")
    }
  }


}
