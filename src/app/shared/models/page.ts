import { PageSort } from "./page-sort";
import { PagePageable } from "./page-pageable";

export interface Page<T> {
  content: T[];
  pageable: PagePageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  number: number;
  sort: PageSort;
  size: number;
  first: boolean;
  numberOfElements:number;
  empty: boolean;
}
