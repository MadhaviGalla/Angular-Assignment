import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService  {
  [x: string]: any;
  get: any;
  Customers: any;

  url ="src/assets/customers.json"

  constructor(private http:HttpClient) {
    this.http.get("http://localhost:3000/customers").subscribe(data => 
    console.log(data))
   }

  // getdata():any{
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  // }

  getcustomer():Observable<any>{
    return  this.http.get("http://localhost:3000/customers");
    
  }

  getCustomerById(id:string){
    return this.http.get("http://localhost:3000/customers/"+id)
  }



  }


