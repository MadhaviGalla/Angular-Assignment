import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ServiceService } from '../service/service.service';
import Customerdata from 'src/assets/customers.json';



@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  public customer: any;
  customers = Customerdata;
  search2 = '';

  p: any;


  constructor(private service1: ServiceService) { }
  customerdata: any;
  ngOnInit() {


    this.service1.getdata().subscribe((res: any) => {
      this.customerdata = res;
      console.log(res);
    }
    );

    // this.customers
    this.customers.map((c: any) => {
      c['totalCost'] = 0;
      if (c?.orders) {
        c.orders = c.orders.map((o: any) => {
          c['totalCost'] += o.itemCost;
        });
      }
    })
    console.log(this.customers);

  }

}
