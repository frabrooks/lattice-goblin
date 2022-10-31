import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.index';
import { BatteryDatapoint } from '../models/battery-status.model';

export interface NGXChartDataPoint {
    name: string;
    value: number;
}

export interface BatteryStatusViewModel {
    datapoints: NGXChartDataPoint[],
    rawData: BatteryDatapoint[]
}

export const selectFeature = (state: AppState) => state.BatteryStatus;

export const selectBatteryStatusViewModel = createSelector(
  selectFeature,
  (batteryStatus) => {
    const datapoints: NGXChartDataPoint[] = batteryStatus.billingPeriods.map((val) => {
        return {
            name: xAxisTicks[val.Period - 1],
            // 0.0001 as animation of ngx-chart doesn't like 0
            value: val['State-of-Charge'] === 0 ? 0.0001 : val['State-of-Charge'],
        }
    });
    return {datapoints: datapoints, rawData: batteryStatus.billingPeriods};
  }
);

export const xAxisTicks: any[] = [
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30',
    '00:00'
]