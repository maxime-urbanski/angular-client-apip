import { ListComponent } from "@components/review/list/list.component";
import { ShowComponent } from "@components/review/show/show.component";
import {CreateComponent} from "@components/review/create/create.component";
import {EditComponent} from "@components/review/edit/edit.component";

export const ReviewRoutes = [
  {
    path: "reviews",
    component: ListComponent,
  },
  {
    path: "reviews/:id",
    component: ShowComponent,
  },
  {
    path: "reviews/add",
    component: CreateComponent,
  },

  {
    path: "reviews/:id/edit",
    component: EditComponent,
  }
];
