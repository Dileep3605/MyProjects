import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DndroutingModule } from './dndrouting.module';
import { DNDComponent } from './dnd.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DNDComponent],
  imports: [
    DragDropModule,
    DndroutingModule,
    SharedModule
  ], 
  exports:[DNDComponent]
})
export class DndModule { }
