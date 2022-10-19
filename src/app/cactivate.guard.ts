import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CactivateGuard implements CanActivate {

  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      if(localStorage.getItem("uname")==null && localStorage.getItem("pwd")==null){
        alert("Please Enter Credentials to Login..")
        this.router.navigate(['LoginComponent']);
        return false;
      }
      else{
        return true;
      }
   
  }
  
}
