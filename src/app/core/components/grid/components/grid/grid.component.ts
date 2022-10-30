import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-grid',
  template: '<ng-content></ng-content>',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  constructor() { }

  @HostBinding('class')
  public get cssClass(): string {
    return 'grid';
  }

}
