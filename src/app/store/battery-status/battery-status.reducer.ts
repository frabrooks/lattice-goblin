import { Action, createReducer, on } from "@ngrx/store";
import { BatteryDatapoint } from "src/app/views/battery-status/models/battery-status.model";
import { newBatteryStatusData } from "./battery-status.actions";

export const userFeatureKey = 'BatteryStatusState';

export interface BatteryStatusState {
    billingPeriods: BatteryDatapoint[]
}

const initialState: BatteryStatusState = {
    billingPeriods: []
}

const reducer = createReducer(
    initialState,

    on(newBatteryStatusData, (state, { data }) => ({
        ...state,
        billingPeriods: data,
    }))

)

export function batteryStatusReducer(state: BatteryStatusState | undefined, action: Action): BatteryStatusState {
    return reducer(state as BatteryStatusState, action as Action);
}

