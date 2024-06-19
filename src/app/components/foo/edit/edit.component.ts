import {CommonModule, Location} from "@angular/common";
import {Component, computed, OnInit, signal, SimpleChange, WritableSignal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {DeleteComponent} from "@components/common/delete/delete.component";
import {FormComponent} from "@components/common/form/form.component";
import {ApiShow, ApiUpdate} from "@interface/api";
import {ApiService} from "@service/api.service";


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
  public item: WritableSignal<ApiShow | ApiUpdate | undefined> = signal({} as ApiShow | ApiUpdate | undefined);
  public isLoading: WritableSignal<Boolean> = signal(false)
  public error: WritableSignal<string> = signal('')
  public formType: Array<{ name: string; type: string }> = [
    {
      name: 'name',
      type: 'string',
    }
  ]

  constructor(
    private apiService: ApiService,
    private router: Router,
    private location: Location,
  ) {
  }

  ngOnInit() {
    const splitUrl = this.router.url.split('/edit')[0]
    this.isLoading.set(true)
    this.apiService.getHero(splitUrl)
      .subscribe(value => {
        this.item.set(value)
        this.isLoading.set(false)
      })
  }

  // Interception of changes
  ngOnChanges(changes: SimpleChange) {
  }

  get itemId() {
    return computed(() => this.item()?.["@id"])
  }

  onSubmit(data: any) {
    return this.apiService.putHero(this.itemId(), {
      ...this.item,
      ...data
    }).subscribe(
      () => this.location.back()
    )
  }

  delete() {
    return this.apiService.delete(this.itemId()).subscribe(
      () => this.location.back()
    )
  }
}
