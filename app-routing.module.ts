import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseBooksComponent } from '../app/browse-books/browse-books.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes= [
  { path: '', component: HomepageComponent },
  {path: 'home', component: BrowseBooksComponent},
  {path: 'browsebooks', component: BrowseBooksComponent},
  {path: 'becomeseller', component: BrowseBooksComponent},
  {path: 'contactus', component: BrowseBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
