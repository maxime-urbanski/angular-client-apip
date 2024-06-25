  import {BookRoutes} from "@router/book";
import {BookmarkRoutes} from "@router/bookmark";
import {ReviewRoutes} from "@router/review";
import {UserRoutes} from "@router/user";

export const allRoutes = [
  ...BookmarkRoutes,
  ...ReviewRoutes,
  ...BookRoutes,
  ...UserRoutes
]
