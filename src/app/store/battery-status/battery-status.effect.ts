import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { mergeMap, Observable, switchMap } from "rxjs";
import { BatteryDatapoint } from "src/app/views/battery-status/models/battery-status.model";
import { BatteryStatusService } from "src/app/views/battery-status/services/battery-status.service";
import { batteryStatusPageDateChanged, newBatteryStatusData } from "./battery-status.actions";

@Injectable()
export class BatteryStatusEffects {

    constructor(
        private store: Store,
        private actions$: Actions,
        private batteryStatusService: BatteryStatusService
    ) {}

    getBatteryStatusData$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(batteryStatusPageDateChanged),
            switchMap((action: { date: string }) => {
                return this.batteryStatusService.getBatteryStatus(action.date).pipe(
                    switchMap((data: BatteryDatapoint[]) => {
                        return [
                            newBatteryStatusData({ data: data })
                        ];
                    })
                );
            })
        )
    );

}


