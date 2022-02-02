import {Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'anychart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  // access containers located in the DOM
  @ViewChild('chartContainer') container;

  chart: anychart.charts.Pie = null;
  indexSeleccionado: number;

  dataService_ = [
    {x: "2001", value: 10048, info: "Descripción de la variable 2001"},
    {x: "2002", value: 10938, info: "Descripción de la variable mayor, descripción más detallada del año 2002"},
    {x: "2003", value: 9989, info: "Descripción de la variable menor"},
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router) { 
  }

  ngOnInit() {
      // Do not use the absolute path of the svg definitions.
      anychart.graphics.useAbsoluteReferences(false);
      // Default data set mapping, hardcoded here.
      this.chart = anychart.pie(this.dataService_);
      this.chart.title('Ventas del empresa');
      const self = this;
      this.chart.listen('pointsSelect', function (e) {
        self.indexSeleccionado = e['currentPoint'].index;
        self.router.navigate(['/details', self.indexSeleccionado]);
      });

      // ascending order
      this.chart.sort('asc');
      // configure max labels
      let rowsCount = this.chart.data().getRowsCount();
      var row = this.chart.data().row(rowsCount - 1);
      this.chart.label().enabled(true);
      this.chart.label().padding(10, 10);
      this.chart.label().width('25%');
      //this.chart.label().height('25%');
      this.chart.label().hAlign("center");
      this.chart.label().text(row['info']);
      this.chart.label().hAlign("center");
      this.chart.label().background({
        "enabled": true,
        "fill": "White",
        "stroke": "2 gold",
        "cornerType": "round-inner",
        "corners": 5});
      // setting the limits of the chart
      this.chart.bounds('0', '0', '50%', '100%');
  }

  ngAfterViewInit() {
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
  }
}