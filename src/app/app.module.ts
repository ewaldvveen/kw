import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KwRouterModule } from './shared/kw.router.module';
import { DefaultModule } from './default/default.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';

registerLocaleData(localeNl);

@NgModule({
  imports: [
    BrowserAnimationsModule,
    KwRouterModule,
    DefaultModule,
    QuizzesModule,
    UserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'nl-NL' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
