import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent,
    PageNotFoundComponent
  ],
  exports: [
    HomeComponent,
    PageNotFoundComponent
  ]

})
export class DefaultModule {}
