import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe, Location, NgFor, NgIf} from "@angular/common";
import {DeleteComponent} from "@components/common/delete/delete.component";
import {TableComponent} from "@components/common/table/table.component";
import {Hero} from "@interface/hero.model";
import {ApiService} from "@service/api.service";

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
  public isLoading: WritableSignal<Boolean> = signal(false)
  public items: WritableSignal<Hero[]> = signal([])
  public error: WritableSignal<String> = signal('')
  public bulk: WritableSignal<Array<string>> = signal([])

  private apiService: ApiService = inject(ApiService)
  private location: Location = inject(Location)


  ngOnInit() {
    this.toggleIsLoading()
    this.apiService
      .getHeroes('/heroes')
      .subscribe(
        (items) => {
          this.items.set(items['hydra:member'])
        }
      )
    this.toggleIsLoading()
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

  selectedAll() {
    if (!this.bulk().length) {
      this.items().forEach(item => {
        this.bulk().push(<string>item["@id"])
      })
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

  private toggleIsLoading() {
    return this.isLoading.update(value => !value)
  }

  private isInBulkList(id: string): boolean {
    return this.bulk().includes(id)
  }
}
