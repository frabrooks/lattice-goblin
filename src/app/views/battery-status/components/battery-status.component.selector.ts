import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.index';


export const selectFeature = (state: AppState) => state.BatteryStatus;

export const selectBatteryStatusViewModel = createSelector(
  selectFeature,
  (batteryStatus) => batteryStatus.billingPeriods
);
