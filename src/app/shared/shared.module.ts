import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  exports: [
    MaterialModule,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class SharedModule {}
