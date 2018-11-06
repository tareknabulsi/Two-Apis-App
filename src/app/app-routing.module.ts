import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WikiComponent } from './wiki/wiki.component';
import { GiphyComponent } from './giphy/giphy.component';
import { HistoryComponent } from './history/history.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'wiki/:string', component: WikiComponent },
  { path: 'giphy', component: GiphyComponent },
  { path: 'giphy/:string', component: GiphyComponent },
  { path: 'history', component: HistoryComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
