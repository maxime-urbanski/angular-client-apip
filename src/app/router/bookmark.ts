import {ListComponent} from "@components/bookmark/list/list.component";
import {ShowComponent} from "@components/bookmark/show/show.component";
import {CreateComponent} from "@components/bookmark/create/create.component";
import {EditComponent} from "@components/bookmark/edit/edit.component";

export const BookmarkRoutes = [
  {
    path: "bookmarks",
    component: ListComponent,
  },
  {
    path: "bookmarks/add",
    component: CreateComponent,
  },

  {
    path: "bookmarks/:id/edit",
    component: EditComponent,
  },
  {
    path: "bookmarks/:id",
    component: ShowComponent,
  }
];
