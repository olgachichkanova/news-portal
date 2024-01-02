export interface NewsAPI {
  meta: BaseModel[];
  data: ArticleModel[];
}

export interface BaseModel {
  found: number;
  returned: number;
  limit: number;
  page: number;
}

export interface ArticleModel {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: null;
  locale: string;
}
