import { NgModule } from '@angular/core';
import { GlassWreckRoutingModule } from './glass-wreck-routing.module';
import { GlassWreckComponent } from './glass-wreck.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GlassWreckComponent],
  imports: [
    GlassWreckRoutingModule,
    SharedModule
  ], 
  exports:[GlassWreckComponent]
})
export class GlassWreckModule { }
