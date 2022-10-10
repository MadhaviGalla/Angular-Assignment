import { Component, OnInit, Input, Output } from '@angular/core';
import customersData from 'src/assets/customers.json';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})

export class CardviewComponent implements OnInit {
  // public customer: any[] = [];
  search1 = '';
  
  constructor(private service: ServiceService , private router: Router) {
    
   }

  customers = customersData;
  p :any;

  ngOnInit(): void {

  }
  viewOrder(){
    this.router.navigate(["/OrdersComponent"])
  }

}
