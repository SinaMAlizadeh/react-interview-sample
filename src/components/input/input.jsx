import React, { useState, useEffect } from "react";

const InputComponent = () => {
  const [input, setInput] = useState("");
  const [inputFn, setInputFn] = useState({
    phoneNumber: "",
  });

  const changeInput = (e) => {
    debugger;
    setInputFn({
      ...inputFn,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>Test Input</h2>
      <span>
        <b>Value:</b> {input}
      </span>
      <span>
        <b>Value2:</b> {inputFn.phoneNumber}
      </span>
      <input name="input1" onChange={(e) => setInput(e.target.value)} />
      <input name="phoneNumber" onChange={changeInput} />
    </>
  );
};

export default InputComponent;
