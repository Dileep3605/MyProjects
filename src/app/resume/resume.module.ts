import { NgModule } from "@angular/core";
import { ResumeroutingModule } from "./resumerouting.module";
import { ResumeComponent } from "./resume.component";
import { SharedModule } from "../shared/shared.module";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [ResumeComponent],
  imports: [ResumeroutingModule, SharedModule, MatIconModule, MatButtonModule],
  exports: [ResumeComponent],
})
export class ResumeModule {}
