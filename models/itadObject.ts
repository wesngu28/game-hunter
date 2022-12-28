export interface itadObject {
  '.meta': Meta;
  data: Data;
  string: string;
}

interface Data {
  [key: string]: Game;
}

export interface Game {
  list: Offer[];
  urls: Urls;
}

interface Offer {
  price_new: number;
  price_old: number;
  price_cut: number;
  url: string;
  shop: Shop;
  drm: string[];
}

interface Shop {
  id: string;
  name: string;
}

interface Urls {
  game: string;
}

interface Meta {
  currency: string;
}