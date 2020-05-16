import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form.component';


const routerData:Routes = [
  { path: '', component: ReactiveFormComponent },
]
@NgModule({
  imports: [
    RouterModule.forChild(routerData),
  ],
  exports: [RouterModule]
})
export class ReactiveroutingModule { }
