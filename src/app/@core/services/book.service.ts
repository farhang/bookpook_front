import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  baseURl = environment.API_URL;

  getBooksByTitle(keyword: string = ''): Observable<any> {
    return this.http.get(this.baseURl + 'book/title/' + keyword)
  }

  getBooksByMD5(md5: string | null): Observable<any> {
    return this.http.get(this.baseURl + 'book/md5/' + md5)
  }

  downloadBooksByMD5(md5: string | undefined, extension: string | undefined): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get(this.baseURl + `download-book/${md5}/${extension}`, {headers: headers , responseType : 'blob' as 'json'})
  }
}
