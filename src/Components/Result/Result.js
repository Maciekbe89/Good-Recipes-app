import React from "react";
import Book from "../../Assets/svg/book.svg";
import Food from "../../Assets/svg/food.svg";
import "./Result.css";

const Result = ({title, href, ingredients, thumbnail}) => {
  return (
    <div className="result-container">
      <h2 className="recipe__title">{title}</h2>
      <div className="recipe__ingredients">
        <img className="recipe__icons" src={Food} alt="food" />
        <p>{ingredients}</p>
      </div>
      <div className="recipe__link-cta">
        <img className="recipe__icons" src={Book} alt="book" />
        <a className="recipe__link" href={href}>
          Link to recipe
        </a>
      </div>
      <img className="recipe__image" src={thumbnail} alt={title} />
    </div>
  );
};

export default Result;
