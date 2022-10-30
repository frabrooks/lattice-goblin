
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './app-state.index';
import { BatteryStatusEffects } from './battery-status/battery-status.effect';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument(),
        EffectsModule.forRoot([
            BatteryStatusEffects
        ])
    ]
})
export class AppStoreModule {}
