import React from "react";
const Input = ({type, name, label, value, onChange, autoFocus, errors }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        name={name}
        id={name}
        type={type}
        className="form-control"
      ></input>

      {errors[name] && (
        <div className="alert alert-warning text-danger">{errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
