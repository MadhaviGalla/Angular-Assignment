import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private service: ServiceService, private router: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
  }
  data: any

  get(){
    this.service.getcustomer().subscribe((data =>{
      this.data = data
    }))
  }

}
