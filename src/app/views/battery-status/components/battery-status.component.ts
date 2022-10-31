import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, ReplaySubject, takeUntil } from 'rxjs';
import { AppState } from 'src/app/store/app-state.index';
import { batteryStatusPageDateChanged } from 'src/app/store/battery-status/battery-status.actions';
import { BatteryDatapoint } from '../models/battery-status.model';
import { BatteryStatusViewModel, NGXChartDataPoint, selectBatteryStatusViewModel, xAxisTicks } from './battery-status.component.selector';

@Component({
  templateUrl: './battery-status.component.html',
  styleUrls: ['./battery-status.component.scss']
})
export class BatteryStatusComponent implements OnInit, OnDestroy {

  // Select view model
  public readonly vm$: Observable<BatteryStatusViewModel> = this.store.select(selectBatteryStatusViewModel);
  public destroyed$: ReplaySubject<void> = new ReplaySubject();
  public datapointArr: BatteryDatapoint[] = [];

  // chart options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Billing period';
  showYAxisLabel = true;
  yScaleMin = 100;
  yScaleMax = 100;
  yAxisLabel = 'Battery charge';
  chartColors: any[] = [];
  chargeColor: string = "#5CECBF";
  noActionColor: string = "#00B38A";
  dischargeColor: string = "#007D58";
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(batteryStatusPageDateChanged({ date: '1' }));
    this.vm$.pipe(takeUntil(this.destroyed$)).subscribe((val) => {
      this.datapointArr = val.rawData;
      this.chartColors = val.rawData.map((dp) => {
        return { name: xAxisTicks[dp.Period - 1], value: this.actionToColor(dp.Action)}
      });
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private _mockDate = '2';
  public getBatteryStatusDataFor() {
    this.store.dispatch(batteryStatusPageDateChanged({ date: this._mockDate }));
    this._mockDate = this._mockDate == '1' ? '2' : '1'; 
  }

  public formatXAxisLabel(val: string) {
    // Using zero width space unicode char. to hide label
    return val.includes('30') ? '​' : val;
  }

  public formatYAxisLabel(val: string) {
    return val + '%';
  }

  public getTooltipText(dp: NGXChartDataPoint): string {
    var rawDatapoint = this.datapointArr.find((v) => xAxisTicks[v.Period - 1] === dp.name);
    if (rawDatapoint!.Action == 'NONE') return 'At ' + rawDatapoint!['State-of-Charge'] + '% charge';
    if (rawDatapoint!.Action == 'CHARGE') {
        return '+ ' + rawDatapoint!['Charged-kwH'] + ' kWh';
    } else {
        return '- ' + rawDatapoint!['Discharged-kwH'] + ' kWh';
    }
  }

  public getActionText(dp: NGXChartDataPoint): string {
    var rawDatapoint = this.datapointArr.find((v) => xAxisTicks[v.Period - 1] === dp.name);
    if (rawDatapoint!.Action == 'NONE') return 'No Action';
    if (rawDatapoint!.Action == 'CHARGE') {
        return 'Charged';
    } else {
        return 'Discharged';
    }
  }

  private actionToColor(action: 'CHARGE' | 'DISCHARGE' | 'NONE'): string {
    switch(action) {
      case 'CHARGE':
        return this.chargeColor;
      case 'DISCHARGE':
        return this.dischargeColor;
      case 'NONE':
        return this.noActionColor;
    }
  }

}
