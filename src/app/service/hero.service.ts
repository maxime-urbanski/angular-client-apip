import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {List} from "../interface/list.model";
import {ApiList, ApiShow} from "../interface/api";
import {Store} from "@ngrx/store";
import {HeroesActions} from "../store/action/heroes.actions";
import {Show} from "../interface/show.model";

@Injectable({providedIn: 'root'})
export class HeroService {
  baseUrl: string = 'https://localhost'

  constructor(
    private http: HttpClient,
    private store: Store<{
      heroes: List,
      show: Show
    }>
  ) {
  }

  getHeroes(id: string): Observable<ApiList> {
    this.store.dispatch(HeroesActions.getHeroes({isLoading: true}))
    return this.http
      .get<ApiList>(this.baseUrl + id)
      .pipe(
        catchError(
          this.handleError
        )
      )
  }

  getHero(id: string): Observable<ApiShow> {
    this.store.dispatch(HeroesActions.getHero({isLoading: true}))
    return this.http
      .get<ApiShow>(this.baseUrl + id)
      .pipe(
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
