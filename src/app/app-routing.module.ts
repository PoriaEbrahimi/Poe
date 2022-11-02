import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { BrowseComponent } from './body/browse/browse.component';
import { PageNotFoundComponent } from './body/page-not-found/page-not-found.component';
import { SignupComponent } from './body/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
