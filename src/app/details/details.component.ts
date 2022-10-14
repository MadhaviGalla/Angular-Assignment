import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import customersData from 'src/assets/customers.json';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  constructor(private route: ActivatedRoute, private _router: Router, private service: ServiceService) { }

  data = [];

  customers = customersData;
  customer: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(d => {
      console.log(d);
      var id = Number(d.get('id'))
      this.getbyid(id);
    })

  }
  getbyid(id: any) {
    this.service.getCustomerBy(id).subscribe(data => {
      this.customer = data
    })
  }


  details() {
    console.log("Hello")
    this._router.navigate(['details'], { relativeTo: this.route })
  }

  vieworders() {
    this._router.navigate(['DetailsComponent/:id/orders'], { relativeTo: this.route })
    console.log(this.data)
  }

}
