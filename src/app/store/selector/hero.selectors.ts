import {createFeatureSelector, createSelector} from "@ngrx/store";
import {List} from "../../interface/list";

export interface AppState {
  heroes: List
}

const selectHeroes = (state: AppState) => state.heroes

export const selectorHeroesLoading = createSelector(
  selectHeroes,
  (heroes) => heroes.isLoading
)
