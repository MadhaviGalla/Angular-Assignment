import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string | undefined;
  password: string | undefined;
  erroremail : string | undefined;
  errorpassword : string | undefined;

  loginUser(){
    if(this.email== "admin@gmail.com" && this.password== "Admin"){
      
      this.router.navigate(['CardviewComponent'])
    }
    else{
      this.erroremail = "Please enter valid Email";
      this.errorpassword = "Please enter Valid Password";
    }
  }

  refresh(){
    window.location.reload()
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
