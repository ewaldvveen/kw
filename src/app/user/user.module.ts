import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
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
