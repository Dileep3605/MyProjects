import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChatbotroutingModule } from '../chatbot/chatbotrouting.module';
import { ChatbotComponent } from './chatbot.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [ChatbotComponent],
    imports: [
        DragDropModule,
        ChatbotroutingModule,
        SharedModule
    ],
    exports: [ChatbotComponent]
})
export class ChatbotModule { }
