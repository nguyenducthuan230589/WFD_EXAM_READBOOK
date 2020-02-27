import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IBook} from '../../interface/ibook';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-has-read-list',
  templateUrl: './has-read-list.component.html',
  styleUrls: ['./has-read-list.component.css']
})
export class HasReadListComponent implements OnInit {
  bookList: IBook[] = [];
  book: IBook;
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    read: new FormControl()
  });
  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit() {
    this.bookService.getAllBook().subscribe(
      next => this.bookList = next,
      error => console.log(error)
    );
  }

  edit(id: number) {
    const value = this.bookForm.value;
    this.bookList[id].read = false;
    this.bookService.updateBook(value).subscribe(
      next => this.router.navigateByUrl('books/hasread'),
      error => console.log(error)
    );
  }

}
