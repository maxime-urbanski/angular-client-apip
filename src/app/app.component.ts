import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe, CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {SidebarComponent} from "./components/common/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, HttpClientModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
