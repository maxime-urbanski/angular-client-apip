import {Component, Input, Output} from '@angular/core';
import {HeroService} from "../../../service/hero.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
})
export class DeleteComponent {
  @Input() id: string | undefined;

  constructor(
    private heroService: HeroService,
    private location: Location
  ) {
  }

  delete() {
    this.id &&
    this.heroService.delete(this.id).subscribe(() => this.location.back())
  }
}
