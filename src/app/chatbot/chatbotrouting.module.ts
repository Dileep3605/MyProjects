import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot.component';


const routerData: Routes = [
  { path: '', component: ChatbotComponent },

]
@NgModule({
  imports: [
    RouterModule.forChild(routerData),
  ],
  exports: [RouterModule]
})
export class ChatbotroutingModule { }
