import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {List} from "../../../interface/list.model";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() items: List | undefined
}
