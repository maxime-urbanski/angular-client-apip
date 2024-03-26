import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CommonModule, NgIf} from "@angular/common";
import {Store} from "@ngrx/store";
import {HeroService} from "../../../service/hero.service";
import {Show} from "../../../interface/show.model";
import {selectorShowItem, selectorShowLoading} from "../../../store/selector/show.selectors";
import {HeroesActions} from "../../../store/action/heroes.actions";
import {DeleteComponent} from "../../common/delete/delete.component";

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgIf,
    DeleteComponent
  ],
  templateUrl: './show.component.html',
})
export class ShowComponent implements OnInit {
  public isLoading = this.store.select(selectorShowLoading)
  public item = this.store.select(selectorShowItem)

  constructor(
    private store: Store<{ show: Show }>,
    private heroService: HeroService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = this.router.url
    this.heroService
      .getHero(id)
      .subscribe((item) =>
        this.store.dispatch(HeroesActions.getHero({item, isLoading: false})))
  }
}
