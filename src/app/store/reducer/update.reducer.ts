import {createReducer, on} from "@ngrx/store";
import {Update} from "@interface/update.model";
import * as FooActions from '@store/action/foo.actions'
import {ApiUpdate} from "@interface/api";

const initialState: Update = {
  isLoading: false,
  item: {} as ApiUpdate,
  error: ''
}

export const updateReducer = createReducer(
  initialState,
  on(FooActions.UpdateActions,
    (_state, {item, isLoading = false, error = ''}) => ({
      ..._state,
      item,
      isLoading,
      error
    })),
  on(FooActions.isLoadingAction,
    (_state, {isLoading}) => ({
      ..._state,
      isLoading
    }))
)
