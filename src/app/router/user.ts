import { ListComponent } from "@components/user/list/list.component";
import { ShowComponent } from "@components/user/show/show.component";
import {CreateComponent} from "@components/user/create/create.component";
import {EditComponent} from "@components/user/edit/edit.component";

export const UserRoutes = [
  {
    path: "users",
    component: ListComponent,
  },
  {
    path: "users/:id",
    component: ShowComponent,
  },
  {
    path: "users/add",
    component: CreateComponent,
  },
  {
    path: "users/:id/edit",
    component: EditComponent,
  }
];
