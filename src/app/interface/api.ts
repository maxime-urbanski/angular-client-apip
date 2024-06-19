import {Hero} from "./hero.model";

export interface Api {
  "@context"?: string,
  "@id"?: string,
  "@type"?: string,
}

export interface ApiList extends Api {
  "hydra:totalItems": Number,
  "hydra:member": Hero[]
}

export interface ApiShow extends Api {
  id: string | undefined,
  name: string | null
}

export interface ApiUpdate extends ApiShow {
  [key: string] : string | null | undefined
}


export interface ApiCreate {
  [key: string] : string | null | undefined
}
