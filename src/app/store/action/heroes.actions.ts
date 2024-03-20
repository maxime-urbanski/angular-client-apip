import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Hero} from "../../interface/hero.model";

export const HeroesActions = createActionGroup({
  source: 'Heroes',
  events: {
    'Get Heroes': props<{items?: Array<Hero>, isLoading?: Boolean}>(),
    'Get Hero': props<{ hero: Hero }>(),
    'Put Hero': props<{ hero: Hero }>(),
    'Delete Hero': props<{ id: Number }>(),
  }
})
