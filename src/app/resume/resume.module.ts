import { NgModule } from '@angular/core';
import { ResumeroutingModule } from './resumerouting.module';
import { ResumeComponent } from './resume.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ResumeComponent],
  imports: [
      ResumeroutingModule,
      SharedModule
      
  ],
  exports:[ResumeComponent]
})
export class ResumeModule { }
