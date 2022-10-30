import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatteryStatusComponent } from './battery-status.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    BatteryStatusComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    BatteryStatusComponent
  ]
})
export class BatteryStatusModule { }
