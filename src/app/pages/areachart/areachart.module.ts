import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreachartRoutingModule } from './areachart-routing.module';
import { GraphicComponent } from './components/graphic/graphic.component';

@NgModule({
  declarations: [GraphicComponent],
  imports: [
    CommonModule,
    AreachartRoutingModule
  ]
})
export class AreachartModule { }
