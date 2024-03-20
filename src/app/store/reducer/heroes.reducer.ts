import {createReducer, on} from '@ngrx/store'
import {HeroesActions} from "../action/heroes.actions";
import {List} from "../../interface/list.model";
import {Show} from "../../interface/show.model";

export const initialStateList: List = {
  isLoading: false,
  items: [],
  error: '',
}

export const heroesReducer = createReducer(
  initialStateList,
  on(HeroesActions.getHeroes,
    (_state, {items, isLoading, error}) => ({
      ..._state,
      items,
      isLoading,
      error
    }))
)
