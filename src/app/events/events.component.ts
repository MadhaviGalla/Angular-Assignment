import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  counter: number = 0;
  name = 'xyz'


  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter+=1;
  }

  decrement(){
    this.counter-=1
  }

  changeName(e:any){
    this.name = e.target.value
   console.log(e)
   console.log(e.target)
   console.log(e.target.value)
  }
}
