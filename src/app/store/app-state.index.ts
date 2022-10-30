import { ActionReducerMap } from "@ngrx/store";
import { BatteryStatusState, batteryStatusReducer } from "./battery-status/battery-status.reducer";


export interface AppState {
    BatteryStatus: BatteryStatusState
}

export const reducers: ActionReducerMap<AppState> = {
    BatteryStatus: batteryStatusReducer,
}


