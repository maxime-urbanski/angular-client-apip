import { ListComponent } from "@components/book/list/list.component";
import { ShowComponent} from "@components/book/show/show.component"
import { EditComponent} from "@components/book/edit/edit.component"
import { CreateComponent } from "@components/book/create/create.component"
import {Routes} from "@angular/router";

export const BookRoutes:Routes = [
  {
    path: "books",
    component: ListComponent,
  },
  {
    path: "books/add",
    component: CreateComponent,
  },
  {
    path: "books/:id/edit",
    component: EditComponent,
  },
  {
    path: "books/:id",
    component: ShowComponent,
  },
];
