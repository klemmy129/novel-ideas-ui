import { PageSort } from "./page-sort";

export interface PagePageable {
  sort: PageSort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}
