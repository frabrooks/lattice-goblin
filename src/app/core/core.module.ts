import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { GridModule } from './components/grid/grid.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    GridModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    GridModule
  ]
})
export class CoreModule { }
