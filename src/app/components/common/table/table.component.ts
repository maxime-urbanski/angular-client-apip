import {Component, Input, WritableSignal} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {List} from "../../../interface/list.model";
import {Hero} from "../../../interface/hero.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() items: Hero[] = [];
}
