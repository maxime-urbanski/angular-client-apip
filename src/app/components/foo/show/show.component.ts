import {Observable} from "rxjs";
import {CommonModule, Location} from "@angular/common";
import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {DeleteComponent} from "@components/common/delete/delete.component";
import {Show} from "@interface/show.model";
import {ApiService} from "@service/api.service";
import {
  selectorShowError,
  selectorShowItem,
  selectorShowLoading
} from "@store/selector/show.selectors";
import {isLoadingAction, ShowActions} from "@store/action/foo.actions";
import {ApiShow} from "@interface/api";

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    DeleteComponent
  ],
  templateUrl: './show.component.html',
})
export class ShowComponent implements OnInit {
  public item$: Observable<ApiShow | undefined> = this.store.select(selectorShowItem)
  public isLoading$: Observable<Boolean | undefined> = this.store.select(selectorShowLoading)
  public error$: Observable<String | undefined> = this.store.select(selectorShowError)

  constructor(
    private store: Store<{ show: Show }>,
    private apiService: ApiService,
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit() {
    const id = this.router.url
    this.apiService
      .getHero(id)
      .subscribe(item => {
        this.store.dispatch(ShowActions({
          isLoading: true,
          item
        }))
        this.store.dispatch(isLoadingAction({
          isLoading: false
        }))
      })
  }

  delete(id: string | undefined) {
    return this.apiService.delete(id).subscribe(
      () => this.location.back()
    )
  }
}
