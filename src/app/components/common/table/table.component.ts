import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() heroes =[];
}
