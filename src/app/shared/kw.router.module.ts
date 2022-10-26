import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "../default/home/home.component";
import { PageNotFoundComponent } from "../default/page-not-found/page-not-found.component";
import { QuizzesComponent } from "../quizzes/quizzes.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'quizzes', component: QuizzesComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class KwRouterModule {}
