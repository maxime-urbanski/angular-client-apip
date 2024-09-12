import {Routes} from '@angular/router';
import {LayoutComponent} from "@components/common/layout/layout.component";
import {allRoutes} from "@router/index";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: allRoutes
  }
];
