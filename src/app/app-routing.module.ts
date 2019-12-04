import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './pages/home/home.module#HomeModule'},
  {path: 'linechart', loadChildren: './pages/linechart/linechart.module#LinechartModule'},
  {path: 'errorbar', loadChildren: './pages/errorbar/errorbar.module#ErrorbarModule'},
  {path: 'areachart', loadChildren: './pages/areachart/areachart.module#AreachartModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
