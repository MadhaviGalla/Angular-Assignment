import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import customersData from 'src/assets/customers.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  customers =  customersData;
  customer: any;
 
  ngOnInit(): void {

    this.route.queryParams.subscribe((customers:any)=> {
      this.customer = JSON.parse(customers.data);
      
      console.log(this.customer);
    });
  }

}
