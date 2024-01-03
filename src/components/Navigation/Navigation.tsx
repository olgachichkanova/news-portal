import React, { FC } from "react";
import search from "../../images/search.svg";
import "./Navigation.css";

export const categoryNames: { [index: string]: string } = {
  general: "Home",
  business: "Business",
  tech: "Tech",
  sports: "Sport",
};

interface Props {
  onNavClick: (event: React.MouseEvent<HTMLElement>) => void;
  currentCategory: string;
}

export const Navigation: FC<Props> = ({ onNavClick, currentCategory }) => {
  console.log(currentCategory);
  return (
    <div className="header">
      <div className="logo">
        <span>News</span> Portal
      </div>
      <div className="navigation">
        <ul className="navigation__list">
          {["general", "business", "tech", "sports"].map((item) => {
            return (
              <li key={item} className="navigation__item">
                <a
                  onClick={onNavClick}
                  className={`navigation__link ${
                    currentCategory === item ? "navigation__link--active" : ""
                  }`}
                  data-href={item}
                  href="#"
                >
                  {categoryNames[item]}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="search">
          <img src={search} alt="search icon" />
        </div>
      </div>
    </div>
  );
};
