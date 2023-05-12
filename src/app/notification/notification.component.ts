import { Component, OnInit} from '@angular/core';
import echarts from 'echarts/types/dist/echarts';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  
})
export class NotificationComponent implements OnInit {

  chart: echarts.ECharts | undefined;

  constructor() { }
 options = {
    title: {
      text: 'My Chart'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  };
  
  
  
  
  
  

  ngOnInit(): void {
    // this.chart = echarts.init(nat('myChart'));
    
  }

  
  
}


