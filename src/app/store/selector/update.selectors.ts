import {Update} from "../../interface/update.model";
import {createSelector} from "@ngrx/store";

export interface AppState {
  update: Update
}

const selectUpdate = (state: AppState) => state.update

export const selectorUpdateLoading = createSelector(
  selectUpdate,
  ({isLoading}) => isLoading
)

export const selectorUpdateItem = createSelector(
  selectUpdate,
  ({item}) => item
)

export const selectorUpdateError = createSelector(
  selectUpdate,
  ({error}) => error
)
