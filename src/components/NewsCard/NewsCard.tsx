import React from "react";
import { FC } from "react";
import { beautifyDate } from "../../utils";
import "./NewsCard.css";

interface Params {
  img: string;
  title: string;
  published: string;
  source: string;
  link: string;
}
export const NewsCard: FC<Params> = ({
  img,
  title,
  link,
  published,
  source,
}) => {
  const date = beautifyDate(published);
  return (
    <div className="card">
      <div className="image">
        <img src={img} alt="article image" />
      </div>
      <a href={link} target="_blank">
        <h3>{title}</h3>
      </a>
      <div className="article-data">
        <span className="date">{date}</span>
        <span className="source">{source}</span>
      </div>
    </div>
  );
};
