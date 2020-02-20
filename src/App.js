import React, {useState} from "react";
import {trackPromise} from "react-promise-tracker";
import Loading from "../src/Components/Loading";
import {usePromiseTracker} from "react-promise-tracker";
import Form from "../src/Components/Form/Form";
import Result from "../src/Components/Result/Result";
import Boil from "./Assets/svg/boil.svg";
import "./App.css";

const API_ID = "e6b2cdec";
const API_Key = "c36da8325813b145cad371475fb9ef35";

const App = () => {
  const [value, setValue] = useState([]);
  const [results, setResults] = useState([]);
  const {promiseInProgress} = usePromiseTracker();
  const options = [
    {value: "tomato", label: "Tomato"},
    {value: "garlic", label: "Garlic"},
    {value: "onions", label: "Onions"},
    {value: "bean", label: "Bean"},
    {value: "potato", label: "Potato"},
    {value: "carrot", label: "Carrot"},
    {value: "milk", label: "Milk"},
    {value: "mashrooms", label: "Mashrooms"},
    {value: "cheddar cheese", label: "Cheddar Cheese"},
    {value: "cabbage", label: "Cabbage"},
    {value: "corn", label: "Corn"},
    {value: "eggplant", label: "Eggplant"},
    {value: "eggs", label: "Eggs"}
  ];

  const handleInputChange = (value) => {
    setValue(value);
  };

  const handleValueSubmit = (e) => {
    if (e) {
      e.preventDefault();
      setValue("");
    }

    const API = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${value.map(
      (item) => {
        return item.value;
      }
    )}&app_id=${API_ID}&app_key=${API_Key}`;
    trackPromise(
      fetch(API)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error("nie udało się");
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.hits);

          setResults(data.hits);
        })
        .catch(() => {
          console.log("error");
        })
    );
    // const API = `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${value.map(
    //   (item) => {
    //     return item.value;
    //   }
    // )}`;

    // fetch(API)
    //   .then((e) => e.text())
    //   .then((e) => {
    //     const content = e.split("<!DOCTYPE")[0];
    //     return JSON.parse(content);
    //   })

    //   .then((data) => {
    //     setResults(data.results);
    //   })
    //   .catch(() => {
    //     console.log("error");
    //   });
  };

  return (
    <div className="main-container">
      <Form
        options={options}
        value={value}
        change={handleInputChange}
        submit={handleValueSubmit}
        key={options}
      />
      <Loading />
      {results.length === 0 && !promiseInProgress ? (
        <img className="main-page__icon" src={Boil} alt="boil" />
      ) : (
        results.map((result) => (
          <Result key={result.recipe.label} {...result.recipe} />
        ))
      )}
    </div>
  );
};

export default App;
