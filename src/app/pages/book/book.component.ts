import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../@core/services/book.service';
import { Book } from '../../@core/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private router: Router)
  {

  }

  md5: string | null = '';
  extension: string | null = '';
  book = <Book>{ }
  ngOnInit()
  {
    this.md5 = this.activatedRoute.snapshot.paramMap.get('md5');
    this.extension = this.activatedRoute.snapshot.paramMap.get('extension');
    this.bookService.getBooksByMD5(this.md5).subscribe(res => {
      console.log(res);
      this.book = JSON.parse(JSON.stringify(res[0]));
    })
  }

  gotoHome()
  {
    this.router.navigate(['../..']);
  }

  downloadBook(book: Book)
  {
    this.bookService.downloadBooksByMD5(book.MD5, book.Extension).subscribe(res => {
      console.log('hello')
      this.downloadFile(res, book);
    })
  }

  downloadFile(data: Blob, book: Book) {
        var file = new Blob([data], { type: book.Extension })
        var fileURL = URL.createObjectURL(file);
        console.log('fileUrl', fileURL)
// if you want to open PDF in new tab
        window.open(fileURL);
        var a         = document.createElement('a');
        a.href        = fileURL;
        a.target      = '_blank';
        a.download    = `${book.Title}.${book.Extension}`;
        document.body.appendChild(a);
        a.click();
  }
}
