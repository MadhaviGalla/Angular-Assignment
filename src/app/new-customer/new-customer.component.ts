import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Customers } from '../customers';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  productForm:Customers ={
    id: 0,
    firstName:'',
    lastName: '',
    gender: '',
    address: '',
    city: '',

  state:{
    abbreviation: '',
    name:'',
    
  }
  
    
  }  
  
  serviceService: any;

  constructor(private service: ServiceService,
     private froms:FormsModule, private router:Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {

    
  }
  
  data:any;

  create(){
    this.service.create(this.productForm)
    .subscribe({
      next:(data: any) => {
      // this.router.navigate(["/CardviewComponent"])
      },
      error:(err: any) => {
        console.log(err);
      }
    })
  }

}
