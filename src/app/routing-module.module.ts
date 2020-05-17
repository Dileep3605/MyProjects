import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routerData:Routes = [
  { path: '', redirectTo: '/resume', pathMatch: 'full' },
  { path: 'resume',  loadChildren: './resume/resume.module#ResumeModule' },
  { path: 'dragAndDrop',  loadChildren: './dnd/dnd.module#DndModule' },
  { path: 'reactiveform',  loadChildren: './reactive-form/reactive.module#ReactiveModule' },
  { path: 'chatbot',  loadChildren: './chatbot/chatbot.module#ChatbotModule' },
  { path: 'glass',  loadChildren: './glass-wreck/glass-wreck.module#GlassWreckModule' },
  { path: '**', component: PagenotfoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routerData,{preloadingStrategy:PreloadAllModules}),
  ],
  exports: [RouterModule]
})
export class RoutingModuleModule { }
