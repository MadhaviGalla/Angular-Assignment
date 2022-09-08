import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(){
    this.router.navigate(['/Login']);
    
  }

}
