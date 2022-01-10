import React from "react";

const BaseInputComponent = ({ title, name, value, change, type = "text" }) => {
  return (
    <>
      <label htmlFor={name}>{title}</label>
      <input type={type} name={name} onChange={change} value={value} />
    </>
  );
};

export default BaseInputComponent;
