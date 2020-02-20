import React from "react";
import Book from "../../Assets/svg/book.svg";
import Food from "../../Assets/svg/food.svg";
import "./Result.css";

const Result = ({label, url, ingredientLines, image, calories}) => {
  return (
    <div className="result-container">
      <h2 className="recipe__title">{label}</h2>
      <div className="container__img">
        <img className="recipe__image" src={image} alt={label} />
        <div className="overlay">
          <div className="text">{calories.toFixed(0)} kcal</div>
        </div>
      </div>
      <div className="recipe__ingredients">
        <img className="recipe__icons" src={Food} alt="food" />
        <p className="recipe__ingredients-text">{ingredientLines.join(", ")}</p>
      </div>
      <div className="recipe__link-cta">
        <img className="recipe__icons" src={Book} alt="book" />
        <a className="recipe__link" href={url}>
          Link to recipe
        </a>
      </div>
    </div>
  );
};

export default Result;
