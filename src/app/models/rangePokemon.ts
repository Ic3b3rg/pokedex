export interface RangePokemon {
  count: number;
  next: string;
  previous?: any;
  results: ResultRangePokemon[];
}
export interface ResultRangePokemon {
  name: string;
  url: string;
}
