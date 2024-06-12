import {showReducer} from "./show.reducer";
import {updateReducer} from "./update.reducer";
import {listReducer} from "./list.reducer";

export default {
  show: showReducer,
  delete: updateReducer,
  list: listReducer
}
