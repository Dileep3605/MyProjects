import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlassWreckComponent } from './glass-wreck.component';


const routerData: Routes = [
  { path: '', component: GlassWreckComponent },

]
@NgModule({
  imports: [
    RouterModule.forChild(routerData),
  ],
  exports: [RouterModule]
})
export class GlassWreckRoutingModule { }
