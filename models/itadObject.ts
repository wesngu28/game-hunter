export interface itadObject {
  '.meta': Meta;
  data: Data;
}

interface Data {
  [key: string]: game;
}

interface game {
  list: any[];
  urls: Urls;
}

interface Urls {
  game: string;
}

interface Meta {
  currency: string;
}