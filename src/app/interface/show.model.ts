import {ApiShow} from "@interface/api";

export interface Show {
  isLoading?: Boolean,
  item?: ApiShow | undefined,
  error?: string,
}
