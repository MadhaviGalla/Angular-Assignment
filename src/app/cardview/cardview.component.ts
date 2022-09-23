import { Component, OnInit, Input, Output } from '@angular/core';
import customersData from 'src/assets/customers.json';


@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})

export class CardviewComponent implements OnInit {
  // public customer: any[] = [];
  search1 = '';
  
  constructor() { }

  customers = customersData;
  p :any;

  ngOnInit(): void {

  }

}
