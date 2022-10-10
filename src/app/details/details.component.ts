import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import customersData from 'src/assets/customers.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  

  constructor(private route: ActivatedRoute, private _router:Router) {}

   data = [];

  customers =  customersData;
  customer: any;
 
  ngOnInit(): void {

    this.route.queryParams.subscribe((customers)=> {
      this.customer = JSON.parse(customers['data']);
      console.log(this.customer);
    });
  }


  // viewOrder(){
  //   this._router.navigate(["OrdersComponent"])
  //   queryparams:
  //   {
  //     data: JSON.stringify(this.customer)
  //   }
  // }
  // Edit()
  // {
  //   this._router.navigate(["OrdersComponent"])
  // }
  // getAllCustomer(){
  //   return customersData;
  // }

  // getCustomerB(id){
  //   return customersData.find(e => e['id'] == id)
  // }
  

showOverview(){
  this._router.navigate(['overview'], {relativeTo: this.route})
}

showContact(){
  this._router.navigate(['contact'], {relativeTo: this.route})
}


DetailsComponent(data: any) {
  this._router.navigate(['DetailsComponent'],
    {
      queryParams: {
        data: JSON.stringify(data)
      }
    }
  )
}

}
