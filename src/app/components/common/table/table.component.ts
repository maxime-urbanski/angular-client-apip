import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Hero} from "../../../interface/hero.model";
import {List} from "../../../interface/list";
import {selectorHeroesLoading} from "../../../store/selector/hero.selectors";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() items: List | undefined

  isLoading = this.store.select(selectorHeroesLoading)

  constructor(private store: Store<{ heroes: List }>) {
  }
}
