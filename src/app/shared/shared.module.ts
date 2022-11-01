import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { BrowserModule } from "@angular/platform-browser";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from "@angular/router";
import { routeConfig } from "../route.config";

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routeConfig),
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  exports: [
    BrowserModule,
    MaterialModule,
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ]
})
export class SharedModule {}
