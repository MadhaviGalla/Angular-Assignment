import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {


  renderAllChart: any[] = [];

  constructor(private service: ServiceService) {}


  chartOption: EChartsOption = {};
  barOption: EChartsOption = {};
  pieOption: EChartsOption = {};


  ngOnInit(): void {
    this.getCharts();
  }


  getCharts() {
    this.service.getcustomer().subscribe((res) => {
      this.renderAllChart = res;
      console.log(this.renderAllChart, "graphs")
      this.renderCharts();
    })

  }

  renderCharts() {
    this.chartOption = {
      title: {
        text: "Line chart",
        left: "center",
      },
      xAxis: {
        type: 'category',
        data: this.renderAllChart.map((d: any) => d.firstName),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.renderAllChart.map((d: any) => d.value),
          type: 'line',
        },
      ],
      dataZoom: [{
        type: 'slider',
        start: 0,
        end: 100
      }]
    };
    // console.log(this.renderAllChart, "bar");

    // bar-chart    
    this.barOption = {
      title: {
        text: "Bar chart",
        left: "center",
      },
      color: ["#42a5f5", "#c5c3c3", "#f98407", "#e00090"],
      xAxis: {
        type: "category",
        axisLabel: {
          interval: 0,
          fontSize: 8,
          rotate: 45,
        },
        axisTick: {
          alignWithLabel: true,
        },
        data: this.renderAllChart.map((e: any) => e.firstName)
      },
      yAxis: {
        type: "value",
      },
      tooltip: {
        show: true,
      },
      series: [
        {
          data: this.renderAllChart.map((d: any) => d.id),
          type: "bar",
        },
      ],
      dataZoom: [{
        type: 'slider',
        start: 20,
        end: 80,
        zoomLock: true,
        showDataShadow: false,
        backgroundColor: '#f5f5f5',
      }]
    };

    // pie chart
    this.pieOption = {
      title: {
        text: "Pie Chart",
        left: "center",
      },
      color: ["#42a5f5", "#c5c3c3", "#f98407", "#e00090"],
      tooltip: {
        trigger: "item",
      },

      series: [
        {
          type: "pie",
          radius: "50%",
          label: {
            show: false,
          },
          left: "left",
          data: this.renderAllChart.map((e: any) => e.value && e.value),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],

      legend: {
        show: true,
        name: 'value',
        data: ['value'],
        orient: "vertical",
        left: "right",
        top: "middle",
        align: "left",
      },
    }

  }


}



