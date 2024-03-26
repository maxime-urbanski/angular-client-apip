import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe, NgFor, NgIf} from "@angular/common";
import {TableComponent} from "../../common/table/table.component";
import {List} from "../../../interface/list.model";
import {Store} from "@ngrx/store";
import {HeroesActions} from "../../../store/action/heroes.actions";
import {HeroService} from "../../../service/hero.service";
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
  }

  ngOnInit() {
    this.heroService
      .getHeroes('/heroes')
      .subscribe(
        (items) =>
          this.store.dispatch(HeroesActions.getHeroes({
            items: items['hydra:member'],
            isLoading: false
          }))
      )
  }
}
