import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  search2 = '';
  activatedRoute: any;

  constructor(private service: ServiceService, private _router: Router, _activated: ActivatedRoute) { }
  customerdata: any;


  ngOnInit() {
    this.getlist();


  }
  data: any

  getlist() {
    this.service.getcustomer().subscribe((data) => {
      this.data = data;

      console.log(data);
      this.data.map((c: any) => {
        c['totalCost'] = 0;
        if (c?.orders) {
          c.orders.map((o: any) => {
            c['totalCost'] += o.itemCost;
          });
        }
      })

      console.log(data);
    })
  }

  viewOrder() {
    this._router.navigate(["/OrdersComponent"])
  }


}
