import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DefaultModule } from './default/default.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import { routeConfig } from './route.config';

registerLocaleData(localeNl);

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routeConfig),
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
