import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SvgAnimationComponent } from "./svg-animation.component";

const routerData: Routes = [{ path: "", component: SvgAnimationComponent }];
@NgModule({
  imports: [RouterModule.forChild(routerData)],
  exports: [RouterModule],
})
export class SvgRoutingAnimationModule {}
