import {Location} from "@angular/common";
import {Component, signal, WritableSignal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {DeleteComponent} from "@components/common/delete/delete.component";
import {FormComponent} from "@components/common/form/form.component";
import {ApiService} from "@service/api.service";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    DeleteComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    FormComponent
  ],
  templateUrl: './create.component.html',
})
export class CreateComponent {
  public isLoading: WritableSignal<boolean> = signal(false)
  public formType: Array<{ name: string; type: string }> = [
    {
      name: 'name',
      type: 'string',
    }
  ]

  constructor(private apiService: ApiService, private location: Location) {
  }
  onSubmit(data: any) {
    console.log('data ==>', data)
    return this.apiService
      .add('/heroes',
        {
          ...data
        }
      ).subscribe(
        (item) => {
          this.isLoading.set(true)
          this.location.back()
        }
      )
  }
}
