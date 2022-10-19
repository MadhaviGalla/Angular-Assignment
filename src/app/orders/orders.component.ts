import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { Customers } from '../customers';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  allCustomers: Customers[] = [];
  serviceService: any;
  price = 'number'
  customer: any;


  constructor(private route: ActivatedRoute, private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.getOrder()

  }

  data: any;

  getOrder() {
    this.service.getcustomer().subscribe((data: any) => {
      this.data = data;
      console.log("dat", data)
      this.data.map((c: any) => {
        c['totalCost'] = 0;
        if (c?.orders) {
          c.orders.map((o: any) => {
            c['totalCost'] += o.itemCost;
          });
        }
      })

    })
  }


}
