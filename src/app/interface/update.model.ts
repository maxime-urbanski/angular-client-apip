import {ApiShow, ApiUpdate} from "@interface/api";

export interface Update {
  isLoading?: Boolean,
  item: ApiUpdate,
  error?: string,
}
