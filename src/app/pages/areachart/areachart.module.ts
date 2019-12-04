import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreachartRoutingModule } from './areachart-routing.module';
import { GraphicComponent } from './components/graphic/graphic.component';

import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [GraphicComponent],
  imports: [
    CommonModule,
    AreachartRoutingModule,
    ChartModule
  ]
})
export class AreachartModule { }
