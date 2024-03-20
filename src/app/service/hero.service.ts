import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Hero} from "../interface/hero.model";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {List} from "../interface/list";
import {Api} from "../interface/api";
import {Store} from "@ngrx/store";
import {HeroesActions} from "../store/action/heroes.actions";

@Injectable({providedIn: 'root'})
export class HeroService {
  heroes$ = this.store.select('heroes')

  constructor(
    private http: HttpClient,
    private store: Store<{ heroes: List }>
  ) {
    this.heroes$ = store.select('heroes')
  }

  getHeroes(): Observable<Hero[]> {
    this.store.dispatch(HeroesActions.getHeroes({isLoading: true}))
    return this.http
      .get<Api>('https://localhost/heroes')
      .pipe(map(result => result['hydra:member']))
  }
}
