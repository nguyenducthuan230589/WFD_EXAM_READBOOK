import {Component, OnInit} from '@angular/core';
import {IBook} from '../../interface/ibook';

import {BookService} from '../../services/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';


@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.css']
})
export class ReadListComponent implements OnInit {

  bookList: IBook[] = [];
  book: IBook;

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit() {
    this.bookService.getAllBook().subscribe(
      next => this.bookList = next,
      error => console.log(error));
  }

  odit(book: any) {
    this.bookService.updateBooks(book.id, book.name, 'true').subscribe(
      next => {
        this.router.navigateByUrl('books/read');
        this.ngOnInit();
      },
      error => console.log(error)
    );
  }
}
