import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app-state.index';
import { batteryStatusPageDateChanged } from 'src/app/store/battery-status/battery-status.actions';
import { BatteryDatapoint } from '../models/battery-status.model';
import { selectBatteryStatusViewModel } from './battery-status.component.selector';

@Component({
  templateUrl: './battery-status.component.html',
  styleUrls: ['./battery-status.component.scss']
})
export class BatteryStatusComponent implements OnInit {

  // Select view model
  public readonly vm$: Observable<BatteryDatapoint[]> = this.store.select(selectBatteryStatusViewModel);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  public getBatteryStatusDataFor(date: string) {
    this.store.dispatch(batteryStatusPageDateChanged({ date: date }));
  }

}
