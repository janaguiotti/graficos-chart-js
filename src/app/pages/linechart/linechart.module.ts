import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinechartRoutingModule } from './linechart-routing.module';
import { GraphicComponent } from './components/graphic/graphic.component';

@NgModule({
  declarations: [GraphicComponent],
  imports: [
    CommonModule,
    LinechartRoutingModule
  ]
})
export class LinechartModule { }
