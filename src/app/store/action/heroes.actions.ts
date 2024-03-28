import {createActionGroup, props} from "@ngrx/store";
import {Hero} from "../../interface/hero.model";

export const HeroesActions = createActionGroup({
  source: 'Heroes',
  events: {
    'Get Heroes': props<{ items?: Array<Hero>, isLoading?: Boolean, error?: string }>(),
    'Get Hero': props<{ item?: Hero, isLoading?: Boolean, error?: string }>(),
    'Update Hero': props<{ item?: Hero, isLoading?: Boolean, error?: string }>(),
    'Delete Hero': props<{ id: Number }>(),
  }
})
