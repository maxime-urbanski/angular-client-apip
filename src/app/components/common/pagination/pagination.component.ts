import {
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
} from "@angular/core";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {Pagination} from "@interface/api";

@Component({
  selector: "app-pagination",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./pagination.component.html",
})
export class PaginationComponent {
  @Input() pagination!: WritableSignal<Pagination>;
  @Output() handleChangePage = new EventEmitter();

  changeUri(uri: string) {
    this.handleChangePage.emit(uri);
  }

  getQueryParams(uri: string) {
    if (!uri) return;
    const splitParams = uri.split("?");
    const params = new URLSearchParams(splitParams[1]);
    let queryParams: Pagination = {}
    for (let [key, value] of params) {
      queryParams[key] = value;
    }
    return queryParams;
  }
}
