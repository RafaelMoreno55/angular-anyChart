import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartDetailComponent } from './chart-detail/chart-detail.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/charts', pathMatch: 'full' },
  { path: 'charts', component: ChartComponent },
  { path: 'details/:id', component: ChartDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
