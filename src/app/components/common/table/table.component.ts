import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ShowSvgComponent} from "../../svg/show-svg/show-svg.component";
import {EditSvgComponent} from "../../svg/edit-svg/edit-svg.component";
import {Observable} from "rxjs";
import {Hero} from "../../../interface/hero.model";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ShowSvgComponent,
    EditSvgComponent,
    AsyncPipe
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() items!: Observable<Hero[]| undefined>;
  @Input() bulk!: Array<string>;
  @Output() addToBulkList = new EventEmitter<string>()
  @Output() selectedAll = new EventEmitter<Function>()


  addToBulk(id: string) {
    this.addToBulkList.emit(id)
  }

  selected() {
    this.selectedAll.emit()
  }
}
