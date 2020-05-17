import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DndroutingModule } from './dndrouting.module';
import { DNDComponent } from './dnd.component';
import { SharedModule } from '../shared/shared.module';
import { SvgAnimationModule } from '../svg-animation/svg-animation.module';



@NgModule({
  declarations: [DNDComponent],
  imports: [
    DragDropModule,
    DndroutingModule,
    SharedModule,
    SvgAnimationModule
  ], 
  exports:[DNDComponent]
})
export class DndModule { }
