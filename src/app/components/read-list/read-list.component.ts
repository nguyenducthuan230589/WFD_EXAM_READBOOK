import {Component, OnInit} from '@angular/core';
import {IBook} from '../../interface/ibook';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {invalid} from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.css']
})
export class ReadListComponent implements OnInit {

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
      error => console.log(error));
  }

  edit(id: number) {
    const value = this.bookForm.value;
    this.bookList[id].read = true;
    this.bookService.updateBook(value).subscribe(
      next => this.router.navigateByUrl('books/read'),
      error => console.log(error)
    );
  }
}
