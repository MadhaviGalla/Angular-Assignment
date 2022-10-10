import { Component, OnInit } from '@angular/core';
import { Customers } from '../customers';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  allCustomers: Customers[]= [];
  serviceService: any;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    // this.get();
  }

  // get(){
  //   this.serviceService.get().subscribe((data: any)=> {
  //     this.allCustomers = data;
  //   })
  }

//   openDialog() {
//     this.dialog.open(DialogComponent, {
//         width: '30%'
//     });
//   }

// }
