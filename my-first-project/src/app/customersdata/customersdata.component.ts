import { Component, OnInit } from '@angular/core';

import  customersdata from 'D:/my-dream-app/src/assets/customers.json';

interface customerdataInterface {
  id: number,
  firstName: String,
  lastName: String,
  gender: String,
  address: number,
  city: String,
}


@Component({
  selector: 'app-customersdata',
  templateUrl: './customersdata.component.html',
  styleUrls: ['./customersdata.component.css']
})
export class CustomersdataComponent implements OnInit {
  public customers: any[] | undefined;
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
