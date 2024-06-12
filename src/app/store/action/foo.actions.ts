import {createAction, props} from "@ngrx/store";
import {Hero} from "../../interface/hero.model";
import {List} from "../../interface/list.model";
import {Show} from "../../interface/show.model";
import {Update} from "../../interface/update.model";

export const ListActions = createAction(
  '[FETCH] List', props<List>()
)

export const isLoadingAction = createAction(
  'IS LOADING', props<{ isLoading: boolean }>()
)

export const showActions = createAction(
  '[FETCH] Show', props<Show>()
)

export const UpdateActions = createAction(
  '[API] Update', props<Update>()
)

export const DeleteActions = createAction(
  '[API] List', props<{ item?: Hero, isLoading?: Boolean, error?: string }>()
)
