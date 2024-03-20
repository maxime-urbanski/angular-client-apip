import {Hero} from "./hero.model";

export interface List {
  isLoading?: Boolean,
  items?: Hero[],
  error?: String,
}
