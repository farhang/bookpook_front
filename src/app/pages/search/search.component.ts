import { Component, OnInit } from '@angular/core';
import { Book } from '../../@core/models/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../@core/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  constructor(private router: Router,
              private bookService: BookService,
              private activatedRoute: ActivatedRoute)
  {
    activatedRoute.queryParams.subscribe(p => this.getBookByTitle());
  }
  books: Book[] = [];
  isLoading = false;

  ngOnInit()
  {
    this.getBookByTitle()
  }

  getBookByTitle() {
    this.isLoading = true;
    this.bookService.getBooksByTitle(this.activatedRoute.snapshot.queryParams['q'] || '').subscribe(res => {
      this.books = res.libgen.filter((item: any) => item.Visible == '');
      this.isLoading = false;
    })
  }

  gotoBook(book: Book)
  {
    console.log('book', book)
    this.router.navigate([`book/${book.MD5}/${book.Extension}`]);
  }

  setCoverUrl(url: string): string {
    let str = url.indexOf('-') != -1 ? url.slice(0, url.indexOf('-')) + url.slice(url.indexOf('-')+ 2) : url;
    return str;
  }
}
