import {NgFor, NgIf} from "@angular/common";
import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from "@angular/core";
import {NavigationEnd, Router, RouterLink, Scroll} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AlertComponent} from "@components/common/alert/alert.component";
import {DeleteComponent} from "@components/common/delete/delete.component";
import {TableComponent} from "@components/book/table/table.component";
import {ApiItem, Pagination, SubmissionErrors} from "@interface/api";
import {ApiService} from "@service/api.service";
import {PaginationComponent} from "@components/common/pagination/pagination.component";
import {filter} from "rxjs";
import * as events from "node:events";
import {UrlMatcherService} from "@service/url-matcher.service";

@Component({
  selector: "app-list-book",
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    TableComponent,
    NgIf,
    DeleteComponent,
    PaginationComponent,
    AlertComponent,
  ],
  templateUrl: "./list.component.html",
})
export class ListComponent implements OnInit {
  public isLoading: WritableSignal<Boolean> = signal(false);
  public pagination: WritableSignal<Pagination> = signal({} as Pagination);
  public items: WritableSignal<ApiItem[]> = signal([]);
  public error: WritableSignal<SubmissionErrors | null> = signal(null);
  public bulk: WritableSignal<Array<string>> = signal([]);
  public uri: WritableSignal<string> = signal("/books");
  private apiService: ApiService = inject(ApiService);
  private urlMatcherService = inject(UrlMatcherService)
  private destroy: DestroyRef = inject(DestroyRef);
  private router: Router = inject(Router)

  ngOnInit() {
    this.fetchData()
  }

  public fetchData() {
    this.toggleIsLoading();
    this.apiService
      .fetchDataList(this.uri())
      // Unsubscribe event for more performance
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe({
        next: (items) => {
          if (items["hydra:view"]) this.pagination.set(items["hydra:view"]);
          this.items.set(items["hydra:member"]);
        },
        error: (err: SubmissionErrors) => this.error.set(err),
      });
    this.toggleIsLoading();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  public addToBulk(id: string) {
    if (this.isInBulkList(id)) {
      const bulkFilter = this.bulk().filter((element) => element !== id);
      return this.bulk.set(bulkFilter);
    }
    this.bulk.update((uri) => [...uri, id]);
  }

  public selectedAll() {
    if (!this.bulk().length) {
      this.items().forEach((item) => {
        this.bulk().push(<string>item["@id"]);
      });
    } else {
      this.bulk.set([]);
    }
  }

  public delete() {
    Promise.all(this.bulk()).then((items) =>
      items.forEach((uri) =>
        this.apiService.delete(uri).subscribe({
          next: () => {
            window.location.reload();
          },
          error: (err: SubmissionErrors) => this.error.set(err),
        })
      )
    );
  }

  async navigateUrl(url: string) {
    await this.router
      .navigate([url])
      .then(res => res ? console.log('success', res) : console.log('error', res))
  }

  public changePage(uri: string) {
    this.uri.set(uri);
    this.fetchData();

  }

  private toggleIsLoading() {
    return this.isLoading.update((value) => !value);
  }

  private isInBulkList(id: string): boolean {
    return this.bulk().includes(id);
  }
}
