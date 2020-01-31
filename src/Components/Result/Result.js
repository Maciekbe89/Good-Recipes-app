import React from "react";

const Result = ({title, href, ingredients, thumbnail}) => {
  //   const {title, href, ingredients, thumbnail} = props.allValues;

  return (
    <>
      <div>{title}</div>
      <a href={href}>{href}</a>
      <div>{ingredients}</div>
      <img src={thumbnail} alt={title} />
    </>
  );
};

export default Result;
