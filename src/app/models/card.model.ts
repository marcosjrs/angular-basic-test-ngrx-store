// From backend ygoprodeck

export const URL_BASE = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

export interface ResponseCards {
  data: Card[];
  meta: Meta;
}

export interface Card {
  id: number;
  name: string;
  type: string;
  frameType: string;
  desc: string;
  race: string;
  archetype?: string;
  ygoprodeck_url: string;
  card_sets: CardSet[];
  card_images: CardImage[];
  card_prices: CardPrice[];
  atk?: number;
  def?: number;
  level?: number;
  attribute?: string;
}

export interface CardImage {
  id: number;
  image_url: string;
  image_url_small: string;
  image_url_cropped: string;
}

export interface CardPrice {
  cardmarket_price: string;
  tcgplayer_price: string;
  ebay_price: string;
  amazon_price: string;
  coolstuffinc_price: string;
}

export interface CardSet {
  set_name: string;
  set_code: string;
  set_rarity: string;
  set_rarity_code: string;
  set_price: string;
}

export interface Meta {
  generated: Date;
  current_rows: number;
  total_rows: number;
  rows_remaining: number;
  total_pages: number;
  pages_remaining: number;
  previous_page: string;
  previous_page_offset: number;
  next_page: string;
  next_page_offset: number;
}

// For Store

export const initialState: CardsState = {
  cards: [],
  state: 'Loading',
  filter: { query: '', page: 0 },
  totalPages: 0,
};

type CardsState = {
  cards: Card[];
  state: 'Loading' | 'Loaded' | 'Error';
  filter: { query: string; page: number };
  totalPages: number;
};
