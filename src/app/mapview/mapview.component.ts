import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loader } from "@googlemaps/js-api-loader"




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

    let loader = new Loader({
      apiKey : 'AIzaSyBg-bvlUMk0P7tjJRuNYTU0mrJv2CyM-V4'
    })

    loader.load().then(() =>{
      new google.maps.Map(document.getElementById("map"),{
        center:{ latitude: 51.678418,  longitude : 7.809007 },
        zoom: 6
      })
    })

  }

  onSelect(){
    this.router.navigate(['/Login']);
    
  }

}
