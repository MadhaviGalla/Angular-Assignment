import { Component, OnInit, Input, Output } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})

export class CardviewComponent implements OnInit {
  
  search1 = '';
  
  constructor(private service: ServiceService , private router: Router) {}
    
   
  p :any;

  ngOnInit(): void {
    this.getData()
  }
  viewOrder(){
    this.router.navigate(["/OrdersComponent"])
  }

  data: any

  getData() {
    this.service.getcustomer().subscribe(data => {
      this.data = data
      
    })
  }

}
