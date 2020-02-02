import React, {Component} from "react";
import Form from "../src/Components/Form/Form";
import Result from "../src/Components/Result/Result";
import Boil from "./Assets/svg/boil.svg";
import "./App.css";

class App extends Component {
  state = {
    value: [],
    results: [],
    options: [
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
    ]
  };

  handleInputChange = (value) => {
    this.setState({
      value
    });
  };

  handleValueSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    const API = `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${this.state.value.map(
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
        this.setState({
          results: data.results
        });
      })
      .catch(() => console.log("error"));
  };

  render() {
    return (
      <div className="main-container">
        <Form
          options={this.state.options}
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleValueSubmit}
          // style={this.style}
        />
        {this.state.results.length === 0 ? (
          <img className="main-page__icon" src={Boil} alt="boil" />
        ) : (
          this.state.results.map((result) => (
            <Result key={result.title} {...result} />
          ))
        )}
      </div>
    );
  }
}

export default App;
