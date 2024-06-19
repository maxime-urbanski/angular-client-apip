import {Component, ElementRef, ViewChildren} from '@angular/core';
import {HeaderComponent} from "@components/common/header/header.component";
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "@components/common/sidebar/sidebar.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
}
