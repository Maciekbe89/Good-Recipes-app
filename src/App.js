import React, {useState} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Form from "../src/Components/Form/Form";
import Result from "../src/Components/Result/Result";
import Boil from "./Assets/svg/boil.svg";
import "./App.css";

const App = () => {
  const [value, setValue] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
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

    const API = `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${value.map(
      (item) => {
        return item.value;
      }
    )}`;

    fetch(API)
      .then((e) => e.text())
      .then((e) => {
        const content = e.split("<!DOCTYPE")[0];
        return JSON.parse(content);
      })

      .then((data) => {
        setResults(data.results);
      })
      .catch(() => console.log("error"));
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
      <ClipLoader />
      {results.length === 0 ? (
        <img className="main-page__icon" src={Boil} alt="boil" />
      ) : (
        results.map((result) => <Result key={result.title} {...result} />)
      )}
    </div>
  );
};

export default App;
