import {Component, OnInit} from '@angular/core';
import {IBook} from '../../interface/ibook';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  book: IBook;
  formBook: FormGroup = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      read: new FormControl()
    }
  );

  constructor(private bookService: BookService, private route: Router) {
  }

  ngOnInit(): void {
  }

  add() {
    const value = this.formBook.value;
    this.bookService.createBook(value).subscribe(
      next => this.route.navigateByUrl('/books'),
      error => console.log(error)
    );
  }

}
