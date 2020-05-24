import { NgModule } from "@angular/core";
import { TicTocToeRoutingModule } from "./tictoctoeRouting.module";
import { SquareComponent } from "./square/square.component";
import { BoardComponent } from "./board/board.component";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [SquareComponent, BoardComponent],
  imports: [TicTocToeRoutingModule, SharedModule, MaterialModule],
  exports: [SquareComponent, BoardComponent],
})
export class TicTocToeModule {}
