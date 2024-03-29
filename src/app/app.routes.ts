import {Routes} from '@angular/router';
import {ListComponent} from "./components/foo/list/list.component";
import {ShowComponent} from "./components/foo/show/show.component";
import {EditComponent} from "./components/foo/edit/edit.component";
import {CreateComponent} from "./components/foo/create/create.component";

export const routes: Routes = [
  {
    path: 'heroes',
    component: ListComponent
  },
  {
    path:'heroes/:id',
    component: ShowComponent,

  },
  {
    path: 'heroes/edit/:id',
    component: EditComponent
  },
  {
    path: 'heroes/add',
    component: CreateComponent
  }
];
