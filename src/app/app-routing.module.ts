import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book/book.component';
import {AddBookComponent} from './book/add-book.component';
import {EditBookComponent} from './book/edit-book.component';

const routes: Routes = [
  { path: 'books', component: BookComponent },
  { path: 'add', component: AddBookComponent },
  { path: 'edit', component: EditBookComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
