import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { GridColumnSize } from '../../grid-column-size.model';

@Component({
  selector: 'app-grid-column',
  template: '<ng-content></ng-content>',
  styleUrls: ['./grid-column.component.scss']
})
export class GridColumnComponent {

  @Input() public sm: GridColumnSize;
  @Input() public md: GridColumnSize;
  @Input() public lg: GridColumnSize;
  @Input() public justify: 'start' | 'center';

  constructor() {}

  @HostBinding('class')
  public get cssClass(): string {
    let cssClasses: string[] = ['grid-column'];
    if (this.sm) cssClasses.push(`grid-column--sm${this.sm}`);
    if (this.md) cssClasses.push(`grid-column--md${this.md}`);
    if (this.lg) cssClasses.push(`grid-column--lg${this.lg}`);
    if (this.justify) cssClasses.push(`grid-column--justify-${this.justify}`);
    return cssClasses.join(' ');
  }

}
