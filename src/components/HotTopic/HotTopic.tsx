import React, { FC } from "react";
import { beautifyDate } from "../../utils";
import "./HotTopic.css";

interface Params {
  img: string;
  title: string;
  published: string;
  source: string;
  snippet: string;
  link: string;
}

export const HotTopic: FC<Params> = ({
  img,
  title,
  published,
  source,
  snippet,
  link,
}) => {
  const date = beautifyDate(published);
  return (
    <section className="hot">
      <h1>Hot Topics</h1>
      <div className="wrapper">
        <div className="article-image">
          <img src={img} alt="article image" />
        </div>
        <div className="article-details">
          <a href={link} target="_blank">
            <h2 className="article-title">{title}</h2>
          </a>
          <p className="article-text">{snippet}</p>
          <div className="article-data">
            <span className="date">{date}</span>
            <span className="source">{source}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
