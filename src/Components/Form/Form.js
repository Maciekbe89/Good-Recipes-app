import React from "react";
import "./Form.css";

const Form = (props) => (
  <form className="form" onSubmit={props.submit}>
    <input
      className="input"
      type="text"
      placeholder="Choose a components..."
      value={props.value}
      onChange={props.change}
    />
    <button>Search</button>
  </form>
);

export default Form;
