import { Component } from '@angular/core';
import { Book } from '../../@core/models/book.model';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../../@core/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private bookService: BookService,
    private router: Router)
  {
  }

  books: Book[] = [];
  isLoading = false;
  form = new FormGroup(
    {
      search: new FormControl('')
    }
  );


  searchBook()
  {
    console.log('this.form.value.search', this.form?.value?.search || '');
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.bookService.getBooksByTitle(this.form?.value?.search || '').subscribe(res => {
      this.books = res.libgen;
      this.isLoading = false;
    })
  }

  gotoBook(book: Book)
  {
    console.log('book', book)
    this.router.navigate([`book/${book.MD5}/${book.Extension}`]);
  }
}
