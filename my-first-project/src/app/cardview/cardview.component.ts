import { Component, OnInit, Input, Output } from '@angular/core';
import customersData from 'src/assets/customers.json';


// interface Customer1 {
//   id: number,
//   firstName: number,
//   lastName: number,
//   gender: string,
//   address: string,
//   city: string,
//   state: [
//     {
//       abbreviation: string,
//       name: string
//     }
//   ],

//   orders: [
//     { productName: string, itemCost: number }
//   ],
//   latitude: number,
//   longitude: number
// }

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
