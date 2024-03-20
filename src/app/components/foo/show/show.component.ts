import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {CommonModule, NgIf} from "@angular/common";
import {Store} from "@ngrx/store";
import {HeroService} from "../../../service/hero.service";
import {Show} from "../../../interface/show.model";
import {selectorShowItem, selectorShowLoading} from "../../../store/selector/show.selectors";
import {HeroesActions} from "../../../store/action/heroes.actions";

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './show.component.html',
})
export class ShowComponent implements OnInit {
  isLoading = this.store.select(selectorShowLoading)
  item = this.store.select(selectorShowItem)

  constructor(
    private store: Store<{ show: Show }>,
    private heroService: HeroService,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id')
    this.heroService
      .getHero(id)
      .subscribe((item) =>
        this.store.dispatch(HeroesActions.getHero({item})))
  }
}
