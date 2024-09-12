export const ReviewRoutes = [
  {
    path: "reviews",
    loadComponent: () =>
      import("@components/review/list/list.component").then(
        (c) => c.ListComponent
      ),
  },
  {
    path: "reviews/add",
    loadComponent: () =>
      import("@components/review/create/create.component").then(
        (c) => c.CreateComponent
      ),
  },
  {
    path: "reviews/:id",
    loadComponent: () =>
      import("@components/review/show/show.component").then(
        (c) => c.ShowComponent
      ),
  },
  {
    path: "reviews/:id/edit",
    loadComponent: () =>
      import("@components/review/edit/edit.component").then(
        (c) => c.EditComponent
      ),
  },
];
