import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { BrowserModule } from "@angular/platform-browser";
import { KwRouterModule } from "./kw.router.module";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    KwRouterModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  exports: [
    BrowserModule,
    MaterialModule,
    KwRouterModule,
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ]
})
export class SharedModule {}
