import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { GridColumnComponent } from './components/grid-column/grid-column.component';
import { GridRowComponent } from './components/grid-row/grid-row.component';

@NgModule({
  declarations: [
    GridComponent,
    GridColumnComponent,
    GridRowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridComponent,
    GridColumnComponent,
    GridRowComponent
  ]
})
export class GridModule { }
