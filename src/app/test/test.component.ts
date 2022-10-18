import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myMicroSoftIcon = faMicrosoft;
  myBarsIcon = faBars;
  myMapMarkerIcon = faMapMarker;
  myPlusIcon = faPlus;
  constructor(private _router: Router, private _activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // Cardview() {
  //   this._router.navigate(['CardviewComponent']);
  // }

  // Listview(){
  //   this._router.navigate(['ListviewComponent']);
  // }
  // MapView(){
  //   this._router.navigate(['MapviewComponent'])
  // }
  // Login(){
  //   this._router.navigate(['LoginComponent'])
  // }
  // Details(){
  //   this._router.navigate(['Details'])
  // }
  // Oders(){
  //   this._router.navigate(['OrdersComponent'])
  // }
  // new(){
  //   this._router.navigate(['NewCustomer'])
  // }



}
