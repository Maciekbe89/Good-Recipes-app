import React, {Component} from "react";
import Form from "../src/Components/Form/Form";
import Result from "../src/Components/Result/Result";
import Boil from "./Assets/svg/boil.svg";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    results: [],
    objectArray: [
      {key: "garlic"},
      {key: "tomato"},
      {key: "potato"},
      {key: "onions"},
      {key: "bean"},
      {key: "mashrooms"},
      {key: "carrot"},
      {key: "cheddar cheese"},
      {key: "milk"}
    ]
  };
  style = {
    chips: {
      background: "#ccc",
      color: "black",
      padding: "6px",
      fontSize: "20px"
    },
    searchBox: {
      // padding: "10px"
    },
    multiselectContainer: {
      width: "67vw",
      borderRadius: "25%",
      margin: "auto",
      gridRow: "2 / 1 span",
      gridColumn: "1 / -1"
    },
    inputField: {
      padding: "12px",
      fontSize: "20px",
      width: "60%"
    },
    optionContainer: {
      // borderRadius: "25%"
      // padding: "20px"
    },
    option: {
      background: "linear-gradient(270deg, #0597f2 0%, #0460d9 100%)",
      border: "none",
      color: "#ccc"
    }
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.map((item) => {
        return item.key;
      })
    });
  };

  handleValueSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    const API = `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${this.state.value}`;

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
          options={this.state.objectArray}
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleValueSubmit}
          style={this.style}
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
