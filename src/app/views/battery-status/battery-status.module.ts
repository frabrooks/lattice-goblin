import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { BatteryRoutingModule } from './battery-routing.module';
import { BatteryStatusComponent } from './components/battery-status.component';


@NgModule({
  declarations: [
    BatteryStatusComponent
  ],
  imports: [
    BatteryRoutingModule,
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    BatteryStatusComponent
  ]
})
export class BatteryStatusModule { }
