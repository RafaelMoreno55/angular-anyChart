import { Component, OnInit, Input, ViewChild } from '@angular/core';
import 'anychart';
import { VariableService } from 'app/variable.service';

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrls: ['./chart-detail.component.css']
})
export class ChartDetailComponent implements OnInit {
  
  //@Input() dataChart: Data;
  @Input() dataChart: string;
  @Input() index: number;

  datasLine = this.getDatasLine();

  detailsChart: anychart.charts.Cartesian = null;

  @ViewChild('detailsChartContainer') detailsChartContainer;

  constructor(private dataService: VariableService) { }

  ngOnInit() {
    console.log(this.index);
    // create an instance of a line chart
    this.detailsChart = anychart.line();
    this.drillDownFunction();
    this.detailsChart.title('Quaters Breakdown');
    this.detailsChart.legend(true);
    this.detailsChart.tooltip().titleFormat('Sales');
    this.detailsChart.bounds('0','0','50%','100%');
    this.detailsChart.container(this.detailsChartContainer.nativeElement);
    this.detailsChart.draw();
  }

  getDatasLine() {
    return this.dataService.getDatasLine();
  }

  drillDownFunction() {
    
    console.log();
    // clear the chart with details
    this.detailsChart.removeAllSeries();
    // points = e.points
    let data = this.datasLine['chart']['data'];
    console.log(data[4]['x']);
    //this.dataChart = data[this.index]['x'];
    data.forEach(element => {
      // console.log(element['x']);
      if (element['x'] == this.dataChart) {
        this.detailsChart.line(element['qtrBreakdown']).name(element['x']);
      }
    });
  }
}
