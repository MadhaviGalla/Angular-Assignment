import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customers } from '../customers';


@Injectable({
  providedIn: 'root'
})
export class ServiceService  {
  // [x: string]: any;
  // get: any;
  // Customers: any;

  // url ="src/assets/customers.json"

  constructor(private http:HttpClient) {
    this.http.get("http://localhost:3000/customers").subscribe(data => 
    console.log(data))
   }

  getcustomer(){
    return  this.http.get("http://localhost:3000/customers");
    
  }
  create(paylode:Customers){
    return this.http.post("http://localhost:3000/customers", paylode);
  }

  getbyId(id:number){
    return this.http.get(`http://localhost:3000/customers/${id}`)
  }

  edit(paylode:Customers){
    return this.http.put(`http://localhost:3000/customers/${paylode.id}`, paylode);
  }

  getCustomerById(id:string){
    return this.http.get("http://localhost:3000/customers/"+id)
  }

  // get method for details (params)
  getCustomerBy(id:any){
    return this.http.get(`http://localhost:3000/customers/${id}`)
  }

  getCustomerorderBy(order:any){
    return this.http.get(`http://localhost:3000/customers/${order}`)
  }

  // crud operation
  getById(id: number) {
    return this.http.get<Customers>(`http://localhost:3000/customers/${id}`);
   }

   update(payload:Customers){
    return this.http.put(`http://localhost:3000/customers/${payload.id}`,payload);
   }

   delete(payload:Customers){
    return this.http.delete(`http://localhost:3000/customers/${payload.id}`);
   }


  }


