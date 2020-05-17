import { NgModule } from "@angular/core";
import { SvgRoutingAnimationModule } from "./svgrouting.module";
import { SvgAnimationComponent } from "./svg-animation.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [SvgAnimationComponent],
  imports: [SvgRoutingAnimationModule, SharedModule],
  exports: [SvgAnimationComponent],
})
export class SvgAnimationModule {}
