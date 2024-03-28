import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {DeleteComponent} from "../../common/delete/delete.component";
import {Router, RouterLink} from "@angular/router";
import {HeroService} from "../../../service/hero.service";
import {CommonModule} from "@angular/common";
import {ApiShow} from "../../../interface/api";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CommonModule,
    DeleteComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  public isLoading = signal(false)
  public item: WritableSignal<ApiShow | null> = signal(null)

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {
  }

  ngOnInit() {
    this.isLoading.set(true)
    const splitUrl = this.router.url.split('/edit')[0]
    this.heroService
      .getHero(splitUrl)
      .subscribe(item => {
        this.item.update(state => ({
          ...item
        }))
        this.isLoading.set(false)
      })
  }

  getValueItem() {
    console.log(this.item())
  }

  onChangeInput(event: Event) {
    console.log(event)

  }
}
