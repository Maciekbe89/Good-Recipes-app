import React, {Component} from "react";
import Form from "../src/Components/Form/Form";
import Result from "../src/Components/Result/Result";
// import {Multiselect} from "multiselect-react-dropdown";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    results: [],
    objectArray: [
      {key: "garlic"},
      {key: "tomato"},
      {key: "potato"},
      {key: "onion"},
      {key: "bean"},
      {key: "mashroom"},
      {key: "carrot"}
    ]
  };
  style = {
    chips: {
      background: "lightgray",
      color: "black",
      padding: "6px",
      fontSize: "20px"
    },
    searchBox: {
      padding: "10px"
    },
    multiselectContainer: {
      width: "700px",
      // fontSize: "20px",
      margin: "auto"
    },
    inputField: {
      padding: "10px",
      fontSize: "20px",
      width: "60%"
    },
    optionContainer: {
      // padding: "20px"
    }
    // option: {
    //   fontSize: "20px"
    // }
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
          results: data.results,
          value: ""
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
        {this.state.results.map((result) => (
          <Result key={result.title} {...result} />
        ))}
      </div>
    );
  }
}

export default App;
