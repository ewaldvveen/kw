import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class SharedModule {}
