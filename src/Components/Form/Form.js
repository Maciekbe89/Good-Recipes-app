import React from "react";
import Select from "react-select";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import "./Form.css";

const Form = ({submit, options, value, change, style}) => (
  <form className="form-container" onSubmit={submit}>
    <Select
      options={options}
      className="input"
      type="text"
      placeholder="Choose a components..."
      value={value}
      onChange={change}
      style={style}
      isMulti
      autoFocus
      isSearchable
    />
    <button className="button__search">
      <FontAwesomeIcon className="icon__search" icon={faSearch} />
    </button>
  </form>
);

export default Form;
