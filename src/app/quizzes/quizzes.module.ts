import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { QuizzesComponent } from "./quizzes.component";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    QuizzesComponent
  ],
  exports: [
    QuizzesComponent
  ]
})
export class QuizzesModule {}
