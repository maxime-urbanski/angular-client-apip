import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Injectable, Signal} from "@angular/core";
import {ApiList, ApiShow} from "../interface/api";

@Injectable({providedIn: 'root'})
export class HeroService {
  baseUrl: string = 'https://localhost'

  constructor(
    private http: HttpClient
  ) {
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

  getHero(id: string): Observable<ApiShow> {
    return this.http
      .get<ApiShow>(this.baseUrl + id)
      .pipe(
        catchError(this.handleError)
      )
  }

  putHero(id: Signal<string | undefined> | string | undefined, data: ApiShow | null) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/ld+json',
      })
    }
    return this.http.put<ApiShow>(
      this.baseUrl + id,
      data,
      httpOptions
    ).pipe(
      catchError(this.handleError)
    )
  }

  create(id: string, data: ApiShow | null) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/ld+json',
      })
    }
    return this.http.post(
      this.baseUrl + id,
      data,
      httpOptions
    ).pipe(
      catchError(this.handleError)
    )
  }

  delete(id: string) {
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
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.error));
  }
}
