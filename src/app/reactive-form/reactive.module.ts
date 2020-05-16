import { NgModule } from '@angular/core';
import { ReactiveroutingModule } from './reactiverouting.module';
import { ReactiveFormComponent } from './reactive-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    ReactiveroutingModule,
    SharedModule
  ],
  exports:[ReactiveFormComponent]
})
export class ReactiveModule { }
