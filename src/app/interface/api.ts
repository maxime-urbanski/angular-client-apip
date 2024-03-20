import {Hero} from "./hero.model";

export interface Api {
  "@context": String,
  "@id": String,
  "@type": String,
}

export interface ApiList extends Api {
  "hydra:totalItems": Number,
  "hydra:member": Hero[]
}

export interface ApiShow extends Api {
  id: Number,
  name: String
}
