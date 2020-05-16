import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DNDComponent } from './dnd.component';

const routerData: Routes = [
  { path: '', component: DNDComponent },

]
@NgModule({
  imports: [
    RouterModule.forChild(routerData),
  ],
  exports: [RouterModule]
})
export class DndroutingModule { }
