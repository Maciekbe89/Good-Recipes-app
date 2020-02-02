import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Multiselect} from "multiselect-react-dropdown";
import "./Form.css";

const Form = ({submit, options, value, change, style}) => (
  <form className="form-container" onSubmit={submit}>
    <Multiselect
      options={options}
      displayValue="key"
      type="text"
      placeholder="Choose a components..."
      value={value}
      onSelect={change}
      style={style}
      closeIcon="cancel"
    />
    <button className="button__search">
      <FontAwesomeIcon className="icon__search" icon={faSearch} />
    </button>
  </form>
);

export default Form;
