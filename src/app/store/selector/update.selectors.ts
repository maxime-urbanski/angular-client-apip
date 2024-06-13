import {createSelector} from "@ngrx/store";
import {Update} from "@interface/update.model";

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
