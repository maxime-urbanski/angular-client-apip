import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Hero} from "../../../interface/hero.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() items!: Hero[];
  @Input() bulk!: Array<string>;
  @Output() addToBulkList = new EventEmitter<string>()


  addToBulk(id: string) {
    this.addToBulkList.emit(id)
  }
}
