import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../../../@core/services/book.service';
import { Book } from '../../../@core/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  constructor(private bookService: BookService,
              private router: Router)
  {
  }

  books: Book[] = [];
  form = new FormGroup(
    {
      search: new FormControl('')
    }
  );
  isLoading = false;


  searchBook()
  {
    this.router.navigate(['search'], {queryParams: {q: this.form.controls.search.value}})
  }
}
