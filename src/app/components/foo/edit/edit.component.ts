import {Observable} from "rxjs";
import {CommonModule, Location} from "@angular/common";
import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {DeleteComponent} from "@components/common/delete/delete.component";
import {FormComponent} from "@components/common/form/form.component";
import {ApiUpdate} from "@interface/api";
import {Update} from "@interface/update.model";
import {ApiService} from "@service/api.service";
import {isLoadingAction, UpdateActions} from "@store/action/foo.actions";
import {
  selectorUpdateError,
  selectorUpdateItem,
  selectorUpdateLoading
} from "@store/selector/update.selectors";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CommonModule,
    DeleteComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    FormComponent,
  ],
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  public isLoading$: Observable<Boolean | undefined> = this.store.pipe(select(selectorUpdateLoading))
  public item$ = this.store.pipe(select(selectorUpdateItem));
  public error$: Observable<String | undefined> = this.store.pipe(select(selectorUpdateError))
  public formType: Array<{ name: string; type: string }> = [
    {
      name: 'name',
      type: 'string',
    }
  ]

  constructor(
    private router: Router,
    private apiService: ApiService,
    private location: Location,
    private store: Store<{ update: Update }>
  ) {
  }

  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    const splitUrl = this.router.url.split('/edit')[0]
    this.apiService
      .getHero(splitUrl)
      .subscribe(item => {
        this.store.dispatch(UpdateActions({
          isLoading: true,
          // @ts-ignore
          item
        }))
        this.store.dispatch(isLoadingAction({
          isLoading: false
        }))
      })

    console.log(this.isLoading$.pipe(val => val))
  }

  /*getItemId(event: any) {
    this.item.update(update => {
      if (update) {
        return {
          ...update,
          name: event
        }
      } else {
        return update
      }
    })
  }*/

  onSubmit(data: any) {
    console.log('event ==>', data)
  }

  /* delete() {
     return this.apiService.delete(this.item()?.["@id"]).subscribe(
       () => this.location.back()
     )
   }*/
}
