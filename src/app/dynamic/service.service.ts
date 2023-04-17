import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  
  products = [{
    id: 0,
    name: 'product 000'
  }, {
    id: 1,
    name: 'product 001'
  }, {
    id: 2,
    name: 'product 002'
  }, {
    id: 3,
    name: 'product 003'
  }]

  
}
