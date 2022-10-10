import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customers } from '../customers';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-customersdata',
  templateUrl: './customersdata.component.html',
  styleUrls: ['./customersdata.component.css']
})
export class CustomersdataComponent implements OnInit {

  public customers : any;

  allCustomers: Customers[]= [];
  serviceService: any;
  Customers: any;
 
  constructor(private http: HttpClient, private service:ServiceService) { }

  ngOnInit(): void {
    
  }


}
