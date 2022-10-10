import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import Cust from 'src/assets/customers.json';
import { Customers } from '../customers';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  // title = 'Import JSON Data from Assets Folder';
  
  public customers = Cust;
  allCustomers: Customers[]= [];
  serviceService: any;
  price = 'number'


  constructor( private _router:Router, private service: ServiceService) { }

  ngOnInit() :void{
    this.customers
      // this._serviceServices.getcustomer().subscribe(data=>this.customers=data);
   
  }
  DetailsComponent(customers:any)
  {
    this._router.navigate(["DetailsComponent"])
    queryParams:
    {
      data: JSON.stringify(this.customers)
    }
  }

  // printAllOrders(orders: any[]){
  //   return orders.map(order => order.productName).join(", ")
  // }

  get(){
    this.serviceService.get().subscribe((data: any)=> {
      this.allCustomers = data;
    })
  }

}
