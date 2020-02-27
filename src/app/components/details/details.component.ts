import {Component, OnInit} from '@angular/core';
import {IBook} from '../../interface/ibook';
import {BookService} from '../../services/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  book: IBook;

  constructor(private bookService: BookService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(+id).subscribe(next => this.book = next, error => console.log(error));
  }

}
