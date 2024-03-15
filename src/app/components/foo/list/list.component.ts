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

  items= [];

  async getItems() {
    const response = await fetchApi('/heroes');
    const data = await response.json()
    this.items = data['hydra:member']
  }

  async ngOnInit() {
    await this.getItems()
  }
}
