export const UserRoutes = [
  {
    path: "users",
    loadComponent: () =>
      import("@components/user/list/list.component").then(
        (c) => c.ListComponent
      ),
  },
  {
    path: "users/add",
    loadComponent: () =>
      import("@components/user/create/create.component").then(
        (c) => c.CreateComponent
      ),
  },
  {
    path: "users/:id",
    loadComponent: () =>
      import("@components/user/show/show.component").then(
        (c) => c.ShowComponent
      ),
  },
  {
    path: "users/:id/edit",
    loadComponent: () =>
      import("@components/user/edit/edit.component").then(
        (c) => c.EditComponent
      ),
  },
];
