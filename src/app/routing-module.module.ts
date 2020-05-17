import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
const routerData: Routes = [
  { path: "", redirectTo: "/resume", pathMatch: "full" },
  {
    path: "resume",
    loadChildren: () =>
      import("./resume/resume.module").then((m) => m.ResumeModule),
  },
  {
    path: "dragAndDrop",
    loadChildren: () => import("./dnd/dnd.module").then((m) => m.DndModule),
  },
  {
    path: "reactiveform",
    loadChildren: () =>
      import("./reactive-form/reactive.module").then((m) => m.ReactiveModule),
  },
  {
    path: "chatbot",
    loadChildren: () =>
      import("./chatbot/chatbot.module").then((m) => m.ChatbotModule),
  },
  {
    path: "glass",
    loadChildren: () =>
      import("./glass-wreck/glass-wreck.module").then(
        (m) => m.GlassWreckModule
      ),
  },
  {
    path: "svganimation",
    loadChildren: "./svg-animation/svg-animation.module#SvgAnimationModule"
  },
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routerData, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class RoutingModuleModule {}
