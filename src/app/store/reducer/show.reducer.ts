import {createReducer, on} from "@ngrx/store";
import {Show} from "@interface/show.model";
import * as FooAction from '@store/action/foo.actions'
import {ApiShow} from "@interface/api";

export const initialStateShow: Show = {
  isLoading: false,
  item: {} as ApiShow,
  error: ''
}

export const showReducer = createReducer(
  initialStateShow,
  on(FooAction.ShowActions,
    (_state: Show, {item, isLoading = false, error = ''}) => ({
      ..._state,
      item,
      isLoading,
      error
    })
  ),
  on(FooAction.isLoadingAction,
    (_state, {isLoading = false}) => ({
      ..._state,
      isLoading
    })
  )
)
