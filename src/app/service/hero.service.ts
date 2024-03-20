import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
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

  getHeroes(): Observable<ApiList> {
    this.store.dispatch(HeroesActions.getHeroes({isLoading: true}))
    return this.http
      .get<ApiList>(this.baseUrl + '/heroes')
  }

  getHero(id: string | null) {
    this.store.dispatch(HeroesActions.getHero({isLoading: true}))
    return this.http
      .get<ApiShow>(this.baseUrl + `/heroes/${id}`)
  }
}
