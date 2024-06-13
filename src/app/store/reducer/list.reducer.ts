import {createReducer, on} from "@ngrx/store";
import {List} from "@interface/list.model";
import * as FooAction from '@store/action/foo.actions'

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
  })),
  on(FooAction.isLoadingAction, (state, {isLoading}) => ({
    ...state,
    isLoading
  }))
)
