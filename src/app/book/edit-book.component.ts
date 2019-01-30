import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../models/book.model';
import { BookService } from './book.service';
@Component({
  templateUrl: './edit-book.component.html'
})
export class EditBookComponent {

  book: Book = new Book();

  constructor(private router: Router, private bookService: BookService) {

  }
  ngOnInit() {
 
    this.book = JSON.parse(localStorage.getItem('editableBook')); 
    
  }  


  updateBook(): void {
    this.bookService.updateBook(this.book)
        .subscribe( data => {
          //alert("Book updated successfully.");
        });
        this.router.navigate(['books']);
  };

}