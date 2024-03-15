import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import fetchApi from "../../../../utils/api"
import {Hero} from "../../../../interface/hero";
import {CommonModule, NgIf} from "@angular/common";


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
  item: Hero | undefined;

  constructor(
    private router: ActivatedRoute
  ) {
  }

  async getItem() {
    const idRoute = this.router.snapshot.paramMap.get('id')
    const response = await fetchApi(`/heroes/${idRoute}`)
    this.item = await response.json()
  }

  async ngOnInit() {
    await this.getItem()
  }
}
