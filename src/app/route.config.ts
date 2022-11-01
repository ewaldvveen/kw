import { Routes } from "@angular/router";
import { HomeComponent } from "./default/home/home.component";
import { PageNotFoundComponent } from "./default/page-not-found/page-not-found.component";
import { QuizzesComponent } from "./quizzes/quizzes.component";
import { LoginComponent } from "./user/login/login.component";

export const routeConfig: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quizzes', component: QuizzesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]
