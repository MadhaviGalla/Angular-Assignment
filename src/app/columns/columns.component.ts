import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent implements OnInit {

  @Input() column = 'data'

  constructor() { }

  ngOnInit(): void {
  }

  drag(event:any){
    console.log()
    event.dataTransfer.setData("text/plain", this.column)
    console.log(event, "drag")
  }

}
