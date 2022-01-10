import React, { useState } from "react";
import BaseInputComponent from "./baseInput";

const MultiInput = () => {
  const [command, setCommand] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [show, setShow] = useState(false);
  const changeInput = (e) => {
    setCommand({
      ...command,
      [e.target.name]: e.target.value,
    });
    setShow(false);
  };
  const clickSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <>
      <form onSubmit={clickSubmit}>
        <BaseInputComponent
          title="firstName"
          name="firstName"
          value={command.firstName}
          change={changeInput}
        />
        <BaseInputComponent
          title="lastName"
          name="lastName"
          value={command.lastName}
          change={changeInput}
        />
        <BaseInputComponent
          title="phoneNumber"
          name="phoneNumber"
          type="number"
          value={command.phoneNumber}
          change={changeInput}
        />
        <div> {show && JSON.stringify(command)}</div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default MultiInput;
