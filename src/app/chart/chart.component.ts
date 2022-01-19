import {Component, OnInit, ViewChild } from '@angular/core';
import 'anychart';
import { DATAS, DATASJSON, DATASPIE } from 'app/mock-variables';
import { Data } from 'app/variable';
import { VariableService } from 'app/variable.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  //datas = DATAS;
  heroes: Data[];

  // selectedHero: Data;
  // onSelect(hero: Data): void {
  //   this.selectedHero = hero;
  // }

  // access containers located in the DOM
  @ViewChild('chartContainer') container;
  //@ViewChild('detailsChartContainer') detailcontainer;

  // JSON data
  //datasJson = DATASJSON;
  datasPie = this.getDatasPie();
  // datasLine = this.getDatasLine();
  selectedSector: string;
  selectedSector1: number;

  // Cartesian chart class
  chart: anychart.charts.Pie = null;
  // Cartesian chart class
  //detailsChart: anychart.charts.Cartesian = null;

  constructor(private dataService: VariableService) { 
  }

  ngOnInit() {
    // Do not use the absolute path of the svg definitions.
    anychart.graphics.useAbsoluteReferences(false);
    // create an instance of a pie chart
    this.chart = anychart.pie();
    // create an instance of a line chart
    //this.detailsChart = anychart.line();
    // get JSON data
    this.getDatasPie();
    this.chart = anychart.fromJson(this.datasPie);
    // set chart title
    this.chart.title('Sales volume: ACME Corp.');
    //this.detailsChart.title('Quaters Breakdown');
    //this.detailsChart.legend(true);
    //this.detailsChart.tooltip().titleFormat('Sales');
    this.selectedSector = "2009";
    this.chart.listen("pointsSelect", function(e) {
      console.log(e);
      //console.log(e['currentPoint']['index']);
      this.selectedSector1 = e['currentPoint']['index'];
      let points = e['points'];
      console.log(this.selectedSector1);
      /*points.forEach(element => {
        // console.log(element['index']);
        
      });*/
      //this.selectedSector1 = index;
      //let algo = e['point'].get('x');
      // console.log('algo = ',algo);
      //this.selectedSector = algo;
      // console.log('aux = ',this.selectedSector);
    });
    
    // setting the limits of the chart
    this.chart.bounds('0','0','50%','100%');
    //this.detailsChart.bounds('0','0','50%','100%');
    // draw chart
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
    //this.detailsChart.container(this.detailcontainer.nativeElement);
    //this.detailsChart.draw();
    // select part pie chart
    //this.chart.select(3);
    //this.drillDownFunction();
    // console.log(this.selectedSector="2011");
    
  }

  /* ngAfterViewInit() {
    // draw chart
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
    this.detailsChart.container(this.detailcontainer.nativeElement);
    this.detailsChart.draw();
    // select part pie chart
    this.chart.select(5);
    this.drillDownFunction();
  } */

  // getDatasLine(): any[] {
  //   return this.dataService.getDatasLine();
  // }

  getDatasPie(): any[] {
    return this.dataService.getDatasPie();
  }

  /* drillDownFunction() {
    // clear the chart with details
    this.detailsChart.removeAllSeries();
    // points = e.points
    var points = this.chart.getSelectedPoints();
    let data = this.datasLine['chart']['data'];
    data.forEach(element => {
      // console.log(element['x']);
      if (element['x'] == points[0].get('x')) {
        this.detailsChart.line(element['qtrBreakdown']).name(element['x']);        
      }
    });
    
    // for (let i = 0; i < points.length; i++) {
    //   this.detailsChart.line(points[i].get('qtrBreakdown')).name(points[i].get('x'));
    // }
  } */
  
  // getHeroes(): void {
  //   this.heroes = this.dataService.getHeroes();
  // }
}