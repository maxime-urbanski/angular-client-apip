import {List} from "../../interface/list.model";
import {createSelector} from "@ngrx/store";


export interface AppState {
  list: List
}

const selectList = (state: AppState) => state.list

export const selectorListLoading = createSelector(
  selectList,
  (state) => state.isLoading
)
export const selectorListItems = createSelector(
  selectList,
  (state) => state.items
)
export const selectorListError = createSelector(
  selectList,
  (state) => state.error
)
