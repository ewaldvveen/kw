import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

registerLocaleData(localeNl);

@NgModule({
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    QuizzesModule,
    UserModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'nl-NL' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
