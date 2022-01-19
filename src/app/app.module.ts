import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ChartDetailComponent } from './chart-detail/chart-detail.component';
import { VariableService } from './variable.service';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ChartDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [VariableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
