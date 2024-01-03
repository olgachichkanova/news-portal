import React from "react";
import { getNews } from "../../utils";
import { HotTopic } from "../HotTopic/HotTopic";
import { ArticleModel } from "../../types";
import { Cards } from "../Cards/Cards";
import { Navigation } from "../Navigation/Navigation";
import "./App.css";

interface TopNewsApi {
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
export const App = () => {
  const [topNews, setTopNews] = React.useState<ArticleModel>();
  const [news, setNews] = React.useState<ArticleModel[]>([]);
  const [category, setCategory] = React.useState("general");

  const onNavClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const category = e.currentTarget.dataset.href;
    if (category) {
      setCategory(category);
    }
  };

  React.useEffect(() => {
    getNews("top", category)
      .then((res) => {
        setTopNews(res.data[0]);
      })
      .catch((error) => {});
    getNews("all", category)
      .then((res) => {
        setNews(res.data);
      })
      .catch((error) => {});
    console.log(category);
  }, [category]);
  return (
    <div className="container">
      <Navigation onNavClick={onNavClick} currentCategory={category} />
      {topNews && (
        <HotTopic
          title={topNews.title}
          img={topNews.image_url}
          published={topNews.published_at}
          snippet={topNews.snippet}
          source={topNews.source}
          link={topNews.url}
        />
      )}
      <h2 className="sub-title">Latest News</h2>
      <Cards news={news} />
    </div>
  );
};
