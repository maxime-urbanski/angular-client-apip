export const BookRoutes = [
  {
    path: "books",
    loadComponent: () =>
      import("@components/book/list/list.component").then(
        (c) => c.ListComponent
      ),
  },
  {
    path: "books/add",
    loadComponent: () =>
      import("@components/book/create/create.component").then(
        (c) => c.CreateComponent
      ),
  },
  {
    path: "books/:id",
    loadComponent: () =>
      import("@components/book/show/show.component").then(
        (c) => c.ShowComponent
      ),
  },
  {
    path: "books/:id/edit",
    loadComponent: () =>
      import("@components/book/edit/edit.component").then(
        (c) => c.EditComponent
      ),
  },
];
