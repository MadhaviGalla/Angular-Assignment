import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

@Output() drop = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  dropped(event:any){
    event.preventDefault();
  }

  // droppes(event:any){
  //  console.log(event)
  // }

  dropedText: any;

  droppes(event: any){
    event.preventDefault();
    this.dropedText=event.dataTransfer.getData("text/plain")
    // console.log(event.dataTransfer.getData("text/plain"), "dropped")
    this.drop.emit(event.dataTransfer.getData("text/plain"));
  }
}
