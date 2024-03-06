import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import fetchApi from "../../../../utils/api"
import {NgFor} from "@angular/common";
import {TableComponent} from "../../common/table/table.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    TableComponent
  ],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit{

  heroes= [];

  async getHeroes() {
    const response = await fetchApi('/heroes');
    const data = await response.json()

    this.heroes = data['hydra:member']
  }

  async ngOnInit() {
    await this.getHeroes()
    console.log(this.heroes)
  }
}
