import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Book } from '../models/book.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookService {
 
  constructor(private http:HttpClient) {}

  //private bookUrl = 'http://127.0.0.1:8080/books';
  private booksUrl = 'http://localhost:8080/books';
  //private bookUrl = '/api';
  private bookURL = 'http://localhost:8080/book';

  public getBooks() {
    return this.http.get<Book[]>(this.booksUrl);
  }

  public getBook(bookid) {
    return this.http.get<Book>(this.bookURL + "/"+ bookid);
  }
 
  public deleteBook(book) {
    return this.http.delete(this.bookURL + "/"+ book.bookid);
  }

  public createBook(book) {
    return this.http.post<Book>(this.bookURL, book);
  }

  public updateBook(book) {
    return this.http.patch<Book>(this.bookURL, book);
  }

}