import {createAction, props} from "@ngrx/store";
import {Hero} from "../../interface/hero.model";

export const ListActions = createAction(
  '[FETCH] List', props<{ items?: Array<Hero>, isLoading?: Boolean, error?: string }>()
)

export const showActions = createAction(
  '[FETCH] Show', props<{ items?: Array<Hero>, isLoading?: Boolean, error?: string }>()
)

export const UpdateActions = createAction(
  '[API] Update', props<{ item?: Hero, isLoading?: Boolean, error?: string }>()
)

export const DeleteActions = createAction(
  '[API] List', props<{ item?: Hero, isLoading?: Boolean, error?: string }>()
)
