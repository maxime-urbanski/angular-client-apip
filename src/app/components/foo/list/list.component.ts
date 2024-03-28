import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe, NgFor, NgIf} from "@angular/common";
import {TableComponent} from "../../common/table/table.component";
import {HeroService} from "../../../service/hero.service";
import {Hero} from "../../../interface/hero.model";

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
  heroes: WritableSignal<Hero[] | []>  = signal([])
  isLoading = signal(false)
  error = signal(undefined)

  constructor(
    private heroService: HeroService,
  ) {
  }

  ngOnInit() {
    this.isLoading.set(true)
    this.heroService
      .getHeroes('/heroes')
      .subscribe(
        (items) => {
          this.heroes.set(items['hydra:member'])
          this.isLoading.set(false)
        })
  }
}
