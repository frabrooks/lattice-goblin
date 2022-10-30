import { createAction, props } from '@ngrx/store';
import { BatteryDatapoint } from 'src/app/views/battery-status/models/battery-status.model';

export const batteryStatusPageDateChanged = createAction(
    '[battery status page] user changed date',
    props<{ date: string; }>()
);

export const newBatteryStatusData = createAction(
    '[battery status page] new battery status / billing periods',
    props<{ data: BatteryDatapoint[]; }>()
);

