import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe, NgFor, NgIf} from "@angular/common";
import {TableComponent} from "../../common/table/table.component";
import {Observable} from "rxjs";
import {List} from "../../../interface/list";
import {select, Store} from "@ngrx/store";
import {HeroesActions} from "../../../store/action/heroes.actions";
import {HeroService} from "../../../service/hero.service";
import {heroesReducer} from "../../../store/reducer/heroes.reducer";
import {selectorHeroesLoading} from "../../../store/selector/hero.selectors";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    TableComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  heroes$ = this.store.select('heroes')
  isLoading = this.store.select(selectorHeroesLoading)
  constructor(private store: Store<{ heroes: List }>, private heroService: HeroService) {
    this.heroes$ = store.select('heroes')
  }

  ngOnInit() {
    this.heroService
      .getHeroes()
      .subscribe(
        (items) =>
          this.store.dispatch(HeroesActions.getHeroes({items, isLoading: false}))
      )
  }
}
