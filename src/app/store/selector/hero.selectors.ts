import {createSelector} from "@ngrx/store";
import {List} from "../../interface/list.model";

export interface AppState {
  heroes: List
}

const selectHeroes = (state: AppState) => state.heroes

export const selectorHeroesLoading = createSelector(
  selectHeroes,
  ({isLoading}) => isLoading
)

export const selectorHeroesItems = createSelector(
  selectHeroes,
  ({items}) => items
)

export const selectorHeroesError = createSelector(
  selectHeroes,
  ({error}) => error
)
