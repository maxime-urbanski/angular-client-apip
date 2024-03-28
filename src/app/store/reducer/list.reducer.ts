import {createReducer, on} from "@ngrx/store";
import * as FooAction from '../action/foo.actions'
import {List} from "../../interface/list.model";


export const initialStateList: List = {
  isLoading: false,
  items: [],
  error: ''
}

export const listReducer = createReducer(
  initialStateList,
  on(FooAction.ListActions, (_state, {items, isLoading, error}) => ({
    ..._state,
    isLoading,
    items,
    error
  }))
)
