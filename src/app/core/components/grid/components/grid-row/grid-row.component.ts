import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-row',
  template: '<div class="grid-row"><ng-content></ng-content></div>',
  styleUrls: ['./grid-row.component.scss']
})
export class GridRowComponent {
  constructor() {}
}
