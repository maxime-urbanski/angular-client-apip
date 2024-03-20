import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Book} from "../interface/book.model";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

export class GoogleBooksService {
  constructor(private http: HttpClient) {
  }

getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{
        items: Book[]
      }>('https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks')
      .pipe(
        map((books) => books.items || [])
      )
  }
}
