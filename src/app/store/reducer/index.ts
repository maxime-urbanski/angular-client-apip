import {heroesReducer} from "./heroes.reducer";
import {showReducer} from "./show.reducer";
import {updateReducer} from "./update.reducer";

export default {
  heroes: heroesReducer,
  show: showReducer,
  delete: updateReducer
}
