import React from "react";
import { getNews } from "../../utils";
import search from "../../images/search.svg";
import menu from "../../images/menu.svg";
import "./App.css";
import { HotTopic } from "../HotTopic/HotTopic";
import { ArticleModel } from "../../types";
import { NewsCard } from "../NewsCard/NewsCard";
import { Cards } from "../Cards/Cards";
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

  React.useEffect(() => {
    getNews("top")
      .then((res) => {
        setTopNews(res.data[0]);
      })
      .catch((error) => {});
    getNews("all")
      .then((res) => {
        setNews(res.data);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <span>News</span> Portal
        </div>
        <div className="navigation">
          <div className="search">
            <img src={search} alt="search icon" />
          </div>
          <div className="menu">
            <img src={menu} alt="menu icon" />
          </div>
        </div>
      </div>
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
      <h2>Latest News</h2>
      <Cards news={news} />
    </div>
  );
};
