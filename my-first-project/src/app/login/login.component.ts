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

  loginUser(){
    if(this.email== "admin@gmail.com" && this.password== "Admin"){
      
      this.router.navigate(['CardviewComponent'])
     

    }
    else{
      alert("Please Check your Details")
    }
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
