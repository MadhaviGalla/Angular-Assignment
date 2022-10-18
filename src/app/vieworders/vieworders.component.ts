import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from '../customers';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {
  data1: any;

  productForm:Customers = {
    // id: 0,
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
  customer: any;
public active=3

  constructor(private service: ServiceService, private router: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(data => {
      console.log(data);
      var id = Number(data.get('id'))
      // this.getData(id)
      this.getById(id)
    })
  }

  //  getData(id: any) {
  //   this.service.getCustomerById(id).subscribe((data) => {

  //     //this.customer = data
  //     console.log(data)
  //     this.customer['totalCost']=0;
  //     if(this.customer?.orders){
  //       this.customer.orders?.map((orders:any)=>{
  //         this.customer['totalCost'] +=orders.itemCost;
  //       });
  //     }


  //   })
  // }


  getById(id: number) {
    this.service.getById(id).subscribe((data) => {
      this.customer=data
      this.productForm = data;
      console.log(this.productForm);
      this.customer['totalCost']=0;
      if(this.customer?.orders){
        this.customer.orders?.map((orders:any)=>{
          this.customer['totalCost'] +=orders.itemCost;
        });
      }
    });  
  }

  update() {
    this.service.update(this.productForm)
    .subscribe({
      next:(data1) => {
        this._router.navigate(['/CardviewComponent']);
        alert("Updated Successfully")
      },
      error:(err) => {
        console.log(err);
      }
    })
    
  }


  delete() {
    this.service.delete(this.productForm)
    .subscribe({
      next:(data) => {
        this._router.navigate(['/CardviewComponent']);
        alert("deleted successfully");
      },
      
    })
    
  }


}


