import {Show} from "../../interface/show.model";
import {createSelector} from "@ngrx/store";

export interface AppState {
  show: Show
}

const selectShow = (state: AppState) => state.show

export const selectorShowLoading = createSelector(
  selectShow,
  ({isLoading}) => isLoading
)

export const selectorShowItem = createSelector(
  selectShow,
  ({item}) => item
)

export const selectorShowError = createSelector(
  selectShow,
  ({error}) => error
)
