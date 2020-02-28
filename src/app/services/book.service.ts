import {Injectable} from '@angular/core';
import {IBook} from '../interface/ibook';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  API_URL = 'http://localhost:8081/books';

  constructor(private http: HttpClient) {
  }

  getAllBook(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.API_URL);
  }

  getBookById(id: number): Observable<IBook> {
    return this.http.get<IBook>(Location.joinWithSlash(this.API_URL, id + ''));
  }

  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(Location.joinWithSlash(this.API_URL, book.id + ''), book);
  }

  updateBooks(id: number, name: string, read: string): Observable<IBook> {
    const book = {id, name, read};
    return this.http.put<IBook>(this.API_URL, book);
  }

  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.API_URL, book);
  }

  deleteBook(id: number): Observable<IBook> {
    return this.http.delete<IBook>(Location.joinWithSlash(this.API_URL, id + ''));
  }
}
