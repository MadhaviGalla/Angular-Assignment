import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {
 
  latitude = 51.678418;
  longitude = 7.809007;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onSelect() {
    this.router.navigate(['/Login']);

  }

}
