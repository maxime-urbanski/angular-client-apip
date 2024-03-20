import {Show} from "../../interface/show.model";
import {createReducer, on} from "@ngrx/store";
import {HeroesActions} from "../action/heroes.actions";

export const initialStateShow: Show = {
  isLoading: false,
  item: undefined,
  error: ''
}

export const showReducer = createReducer(
  initialStateShow,
  on(HeroesActions.getHero,
    (_state, {item, isLoading = false, error = ''}) => ({
      ..._state,
      item,
      isLoading,
      error
    })
  )
)
