import {Hero} from "./hero.model";

export interface Api {
  "@context": String,
  "@id": String,
  "@type": String,
  "hydra:totalItems": Number,
  "hydra:member": Hero[]
}
