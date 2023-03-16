import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  ValidateUser(username: any,password: any){
    if(username=='admin'&& password=='123'){
      return true;
    }
    return false

  }


}
