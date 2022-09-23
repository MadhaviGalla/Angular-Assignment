import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  http: any;

  constructor() {
    getEmp()
    {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
  }
}
function getEmp() {
  throw new Error('Function not implemented.');
}

