import {createReducer, on} from "@ngrx/store";
import {Update} from "../../interface/update.model";
import {HeroesActions} from "../action/heroes.actions";


export const initialStateUpdate: Update = {
  isLoading: false,
  item: undefined,
  error: ''
}

export const updateReducer = createReducer(
  initialStateUpdate,
  on(HeroesActions.updateHero,
    (_state, {item, isLoading, error}) => ({
      ..._state,
      item,
      isLoading,
      error
    }))
)
