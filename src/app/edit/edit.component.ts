import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from '../customers';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  productForm:Customers = {
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

  constructor(private service:ServiceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
      
    });
    
    
  }

  getById(id: number) {
    this.service.getById(id).subscribe((data) => {
      this.productForm = data;
      console.log(this.productForm);
    });  
  }

  update() {
    this.service.update(this.productForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(['/CardviewComponent']);
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
        this.router.navigate(['/CardviewComponent']);
        alert("deleted successfully");
      },
      
    })
    
  }



}
