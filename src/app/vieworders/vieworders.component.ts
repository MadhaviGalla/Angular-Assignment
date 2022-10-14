import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {
  data1: any;

  constructor(private service: ServiceService, private router: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(data => {
      console.log(data);
      var id = Number(data.get('id'))
      this.getData(id)
    })
  }

  data: any

  getData(id: any) {
    this.service.getCustomerById(id).subscribe((data) => {

      this.data = data
      console.log(data)
      this.data['totalCost']=0;
      if(this.data?.orders){
        this.data.orders?.map((orders:any)=>{
          this.data['totalCost'] +=orders.itemCost;
        });
      }


    })
  }


}


