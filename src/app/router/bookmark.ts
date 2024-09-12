export const BookmarkRoutes = [
  {
    path: "bookmarks",
    loadComponent: () =>
      import("@components/bookmark/list/list.component").then(
        (c) => c.ListComponent
      ),
  },
  {
    path: "bookmarks/add",
    loadComponent: () =>
      import("@components/bookmark/create/create.component").then(
        (c) => c.CreateComponent
      ),
  },
  {
    path: "bookmarks/:id",
    loadComponent: () =>
      import("@components/bookmark/show/show.component").then(
        (c) => c.ShowComponent
      ),
  },
  {
    path: "bookmarks/:id/edit",
    loadComponent: () =>
      import("@components/bookmark/edit/edit.component").then(
        (c) => c.EditComponent
      ),
  },
];
