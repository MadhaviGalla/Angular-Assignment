import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ServiceService } from '../service/service.service';
import Customerdata from 'src/assets/customers.json';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  // public customer: any;
  customers = Customerdata;
  search2 = '';
  activatedRoute: any;

  constructor(private service1: ServiceService, private _router: Router, _activated: ActivatedRoute) { }
  customerdata: any;


  ngOnInit() {

    this.service1.getdata().subscribe((res: any) => {
      this.customerdata = res;
      console.log(res);
    }
    );

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


  // cust(data1: any){
  //   this._router.navigate(['DetailsComponent'],
  //   {
  //     queryParams:{
  //     ...data1
  //   }
  //   });

  // }

  onClick(data: any) {
    this._router.navigate(['DetailsComponent'],
      {
        queryParams: {
          data: JSON.stringify(data)
        }
      }
    )
    // this.activatedRoute.queryParams.subscribe((params: any) => {
    //   console.log(params)
    // })
  }

}
