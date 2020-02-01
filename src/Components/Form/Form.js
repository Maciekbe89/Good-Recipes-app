import React from "react";
import {Multiselect} from "multiselect-react-dropdown";
import "./Form.css";

const Form = ({submit, options, value, change, style}) => (
  <form className="form" onSubmit={submit}>
    <Multiselect
      classname="input"
      options={options}
      displayValue="key"
      className="input"
      type="text"
      placeholder="Choose a components..."
      value={value}
      onSelect={change}
      style={style}
      closeIcon="cancel"
    />
    <button className="btn">Search</button>
  </form>
);

export default Form;
