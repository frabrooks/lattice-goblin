import { Action, createReducer, on } from "@ngrx/store";
import { BatteryDatapoint } from "src/app/views/battery-status/models/battery-status.model";
import { batteryStatusPageDateChanged, newBatteryStatusData } from "./battery-status.actions";

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
    })),

    on(batteryStatusPageDateChanged, (state) => ({
        ...state,
        billingPeriods:  state.billingPeriods.map((v) => ({...v, 'State-of-Charge': v["State-of-Charge"] * 0.75}))
    }))

)

export function batteryStatusReducer(state: BatteryStatusState | undefined, action: Action): BatteryStatusState {
    return reducer(state as BatteryStatusState, action as Action);
}

