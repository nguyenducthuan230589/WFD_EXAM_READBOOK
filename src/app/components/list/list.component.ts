import {Component, OnInit} from '@angular/core';
import {IBook} from '../../interface/ibook';
import {BookService} from '../../services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bookList: IBook[] = [];
  book: IBook;

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit(): void {
    this.bookService.getAllBook().subscribe(
      next => this.bookList = next,
      error => console.log(error)
    );
  }

  // deleteBook(book: number) {
  //   this.bookService.deleteBook(book).subscribe(
  //     next => {
  //       this.router.navigateByUrl('/books');
  //     });
  // }
}
