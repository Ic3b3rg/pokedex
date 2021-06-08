export interface ResultTypes {
  name: string;
  url: string;
}

export interface typesResponseAPI {
  count: number;
  next?: any;
  previous?: any;
  results: ResultTypes[];
}
