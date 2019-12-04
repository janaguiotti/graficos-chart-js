import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphicComponent } from './components/graphic/graphic.component';

const routes: Routes = [
  { path: '', component: GraphicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorbarRoutingModule { }
