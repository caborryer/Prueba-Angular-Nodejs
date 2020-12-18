import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MoviesComponent} from "./components/movies/movies.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'movie/:id/:pag', component: MoviesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
