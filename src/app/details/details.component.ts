import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from '../customers';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  constructor(private route: ActivatedRoute, private _router: Router, private service: ServiceService) { }

  productForm: Customers = {

    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: '',
    state: {
      abbreviation: '',
      name: '',
    }
  }

  data = [];

  customer: any;
  public active = 1


  ngOnInit(): void {
    this.route.paramMap.subscribe(d => {
      console.log(d);
      var id = Number(d.get('id'))
      this.getbyid(id);
    })

  }

  getbyid(id: any) {
    this.service.getCustomerBy(id).subscribe((data: any) => {
      this.customer = data
      this.productForm = data
      console.log(data)
      this.customer['totalCost'] = 0;
      if (this.customer?.orders) {
        this.customer.orders?.map((orders: any) => {
          this.customer['totalCost'] += orders.itemCost;
        });
      }

    })
  }



  update() {
    this.service.update(this.productForm)
      .subscribe({
        next: (data) => {
          this._router.navigate(['/CardviewComponent']);
          alert("Updated Successfully")
        },
        error: (err) => {
          console.log(err);
        }
      })

  }


  delete() {
    this.service.delete(this.productForm)
      .subscribe({
        next: (data) => {
          this._router.navigate(['/CardviewComponent']);
          alert("deleted successfully");
        },

      })

  }


}
