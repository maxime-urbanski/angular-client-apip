import {
  Component,
  EventEmitter,
  Input,
  Output, SimpleChange,
  WritableSignal
} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ApiShow, ApiUpdate} from "@interface/api";
import {AsyncPipe, NgIf} from "@angular/common";
import {DeleteComponent} from "@components/common/delete/delete.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    NgIf,
    DeleteComponent
  ],
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input() fields: Array<{ name: string; type: string }> = [];
  @Input() itemToUpdate!: ApiUpdate|ApiShow|undefined;
  @Output() submit = new EventEmitter
  @Output() delete = new EventEmitter
  public formGroup: FormGroup = new FormGroup<any>({})

  ngOnChanges(changes: SimpleChange) {
    this.formGroup = this.createFormGroup()
    console.log('ngOnChanges', this.itemToUpdate)
  }

  createFormGroup() {
    const group: { [key: string]: FormControl<string | null | undefined> } = {}
    this.fields.forEach(field   => {
      let value;
      if (this.itemToUpdate) {
        value = this.itemToUpdate[field?.name as keyof ApiShow]
      }
      group[field.name] = new FormControl(value)
    })
    return new FormGroup(group)
  }

  handleSubmit() {
    this.submit.emit(this.formGroup.value)
  }

  handleDelete() {
    this.delete.emit(this.itemToUpdate?.["@id"])
  }
}
