import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe, Location, NgFor, NgIf} from "@angular/common";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {DeleteComponent} from "@components/common/delete/delete.component";
import {TableComponent} from "@components/common/table/table.component";
import {Hero} from "@interface/hero.model";
import {List} from "@interface/list.model";
import {ApiService} from "@service/api.service";
import {isLoadingAction, ListActions} from "@store/action/foo.actions";
import {selectorListError, selectorListItems, selectorListLoading} from "@store/selector/list.selectors";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    TableComponent,
    AsyncPipe,
    NgIf,
    DeleteComponent
  ],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public isLoading$: Observable<Boolean | undefined> = this.store.select(selectorListLoading);
  public items$: Observable<Hero[] | undefined> = this.store.select(selectorListItems);
  public error$: Observable<String | undefined> = this.store.select(selectorListError);
  public bulk: WritableSignal<Array<string>> = signal([])

  constructor(
    private store: Store<{ list: List }>,
    private apiService: ApiService,
    private location: Location
  ) {

  }

  ngOnInit() {
    this.apiService
      .getHeroes('/heroes')
      .subscribe(
        (items) => {
          this.store.dispatch(ListActions({
            isLoading: true,
            items: items['hydra:member']
          }))
          this.store.dispatch(isLoadingAction({isLoading: false}))
        }
      )
  }

  addToBulk(id: string) {
    if (this.isInBulkList(id)) {
      const bulkFilter =
        this.bulk()
          .filter(element => element !== id)
      return this.bulk.set(bulkFilter)
    }

    this.bulk.update(uri => [...uri, id])
  }

  async selectedAll() {
    if (!this.bulk().length) {
      await this.items$
        .forEach(item =>
          item?.forEach(i =>
            this.bulk().push(<string>i["@id"]
            )
          )
        )
    } else {
      this.bulk.set([])
    }
  }

  delete() {
    Promise.all(this.bulk())
      .then(
        items =>
          items.forEach(
            uri =>
              this.apiService.delete(uri)
                .subscribe(
                  () => {
                    window.location.reload()
                  }
                )
          )
      )
  }

  private isInBulkList(id: string): boolean {
    return this.bulk().includes(id)
  }
}
