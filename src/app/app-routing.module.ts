import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatteryStatusComponent } from './views/battery-status/battery-status.component';
import { BatteryStatusModule } from './views/battery-status/battery-status.module';


const routes: Routes = [
  {
    path: '',
    component: BatteryStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
