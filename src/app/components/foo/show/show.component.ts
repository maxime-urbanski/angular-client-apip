import {Component} from '@angular/core';
import { RouterLink} from "@angular/router";
import {CommonModule,  NgIf} from "@angular/common";
import {Store} from "@ngrx/store";
import {HeroService} from "../../../service/hero.service";

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
export class ShowComponent {

  constructor( private store: Store, private heroService: HeroService) {}
  ngOnInit() {
   /* this.heroService
      .getHeroes()
      .subscribe(
        (heroes) => this.store.dispatch(HeroesActions.getHeroes({ heroes }))
      )*/
  }

  /*delete() {
    if (window.confirm(`Are you sure you want to delete this ${this.item?.["@id"]}`)) {
      this.deleteItemApi()
        .then(() => this.location.back())
    }
  }

  async deleteItemApi() {
    const idRoute = this.router.snapshot.paramMap.get('id')
    await fetchApi(`/heroes/${idRoute}`, {
      method: 'DELETE'
    })
  }*/
}
