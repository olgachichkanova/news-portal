import React, { FC } from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { ArticleModel } from "../../types";
import "./Cards.css";

interface Params {
  news: ArticleModel[];
}

export const Cards: FC<Params> = ({ news }) => {
  return (
    <div className="news-wrapper">
      {news &&
        news.map((item) => (
          <NewsCard
            key={item.uuid}
            title={item.title}
            img={item.image_url}
            published={item.published_at}
            source={item.source}
            link={item.url}
          />
        ))}
    </div>
  );
};
