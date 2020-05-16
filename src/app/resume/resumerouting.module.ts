import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume.component';

const routerData: Routes = [
  { path: '', component: ResumeComponent },

]
@NgModule({
  imports: [
    RouterModule.forChild(routerData),
  ],
  exports: [RouterModule]
})
export class ResumeroutingModule { }
