import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customers } from '../customers';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  data:any
  constructor(private http: HttpClient) {
    this.http.get("http://localhost:3000/customers").subscribe(data =>
    this.data = data)
    // console.log(data))
  }

  ngOnInit(): void{
   
  }

  getcustomer(): Observable<any>{
    return this.http.get("http://localhost:3000/customers");
  }

  // create method for new customer
  create(payload: Customers) {
    return this.http.post("http://localhost:3000/customers", payload);
  }

  // create method for new customer
  getbyId(id: number) {
    return this.http.get(`http://localhost:3000/customers/${id}`)
  }

  edit(payload: Customers) {
    return this.http.put(`http://localhost:3000/customers/${payload.id}`, payload);
  }

  getCustomerById(id: string) {
    return this.http.get("http://localhost:3000/customers/" + id)
  }

  // get method for details (params)
  getCustomerBy(id: any) {
    return this.http.get(`http://localhost:3000/customers/${id}`)
  }

  getCustomerorderBy(order: any) {
    return this.http.get(`http://localhost:3000/customers/${order}`)
  }

  // crud operation
  getById(id: number) {
    return this.http.get<Customers>(`http://localhost:3000/customers/${id}`);
  }

  update(payload: Customers) {
    return this.http.put(`http://localhost:3000/customers/${payload.id}`, payload);
  }

  delete(payload: Customers) {
    return this.http.delete(`http://localhost:3000/customers/${payload.id}`);
  }


}


