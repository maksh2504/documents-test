export type PaginationLinks = {
  first: string;
  last: string;
  prev?: string;
  next?: string;
};

export type PaginationMetaLink = {
  url?: string;
  label: string;
  active: boolean;
};

export type PaginationMeta = {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationMetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type Paginated<T> = {
  data: T[];
  links: PaginationLinks;
  meta: PaginationMeta;
};
