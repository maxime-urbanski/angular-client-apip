import {createReducer, on} from '@ngrx/store'
import {HeroesActions} from "../action/heroes.actions";
import fetchApi from '../../../utils/api'
import {List} from "../../interface/list";

export const initialState: List = {
  isLoading: false,
  items: [],
  error: '',
}
export const heroesReducer = createReducer(
  initialState,
  on(HeroesActions.getHeroes,
    (_state, {items, isLoading}) => ({
      ..._state,
      items,
      isLoading
    }))
)
