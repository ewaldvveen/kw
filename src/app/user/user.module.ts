import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  exports: [
    LoginComponent,
    SignUpComponent
  ]
})
export class UserModule {}
