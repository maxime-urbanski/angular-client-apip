import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {inject, Injectable, Signal} from "@angular/core";
import {ApiList, ApiShow, ApiUpdate} from "@interface/api";

@Injectable({providedIn: 'root'})
export class ApiService {
  baseUrl: string = 'https://localhost'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/ld+json',
    })
  }
  public http: HttpClient = inject(HttpClient)

  add(id: string, data: { name: string | null }) {
    return this.http
      .post<Foo>(
        this.baseUrl + id,
        data,
        this.httpOptions
      )
      .pipe(
        catchError(this.handleError)
      )
  }

  getHeroes(id: string): Observable<ApiList> {
    return this.http
      .get<ApiList>(this.baseUrl + id)
      .pipe(
        catchError(
          this.handleError
        )
      )
  }

  getHero(id: string | Observable<string | undefined>): Observable<ApiShow | ApiUpdate | undefined> {
    return this.http
      .get<ApiShow | ApiUpdate | undefined>(this.baseUrl + id)
      .pipe(
        catchError(this.handleError)
      )
  }

  putHero(id: Signal<string | undefined> | string | undefined, data: ApiShow | null) { 
    return this.http
      .put<ApiShow>(
        this.baseUrl + id,
        data,
        this.httpOptions
      )
      .pipe(
        catchError(this.handleError)
      )
  }


  delete(id: string | undefined | null) {
    return this.http
      .delete(this.baseUrl + id)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was:`);
    }
    return throwError(() => new Error(error.error));
  }
}
