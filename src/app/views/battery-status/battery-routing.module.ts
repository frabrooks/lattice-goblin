import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatteryStatusComponent } from './battery-status.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/battery-status'
  },
  {
    path: 'battery-status',
    component: BatteryStatusComponent,
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatteryRoutingModule { }