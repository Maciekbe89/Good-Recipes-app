import React, {Component} from "react";
import Form from "../src/Components/Form/Form";
import Result from "../src/Components/Result/Result";
import "./App.css";

class App extends Component {
  state = {
    value: ""
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    });
    console.log(e.target.value);
  };

  handleCitySubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    const API = `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${this.state.value}`;

    fetch(API)
      .then((e) => e.text())
      .then((e) => {
        const content = e.split("<!DOCTYPE")[0];
        console.log(JSON.parse(content));
      })
      .catch((error) => console.log("error"));
  };

  render() {
    return (
      <div>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleInputChange}
        />
        <Result />
      </div>
    );
  }
}

export default App;
