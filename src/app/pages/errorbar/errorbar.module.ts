import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorbarRoutingModule } from './errorbar-routing.module';
import { GraphicComponent } from './components/graphic/graphic.component';

@NgModule({
  declarations: [GraphicComponent],
  imports: [
    CommonModule,
    ErrorbarRoutingModule
  ]
})
export class ErrorbarModule { }
