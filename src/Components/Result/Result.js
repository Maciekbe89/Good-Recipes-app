import React from "react";
import Book from "../../Assets/svg/book.svg";
import Food from "../../Assets/svg/food.svg";
import "./Result.css";

const Result = ({title, href, ingredients, thumbnail}) => {
  //   const {title, href, ingredients, thumbnail} = props.allValues;

  return (
    <div className="results-container">
      <h2 className="title">{title}</h2>
      <div className="ingredients">
        <img className="icon" src={Food} alt="food" />
        <p>{ingredients}</p>
      </div>
      <div className="recipe">
        <img className="icon" src={Book} alt="book" />
        <a className="link" href={href}>
          Link to recipe
        </a>
      </div>

      <img className="img" src={thumbnail} alt={title} />
    </div>
  );
};

export default Result;
