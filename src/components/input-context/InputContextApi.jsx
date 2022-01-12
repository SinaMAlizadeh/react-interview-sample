import React, { useContext } from "react";
import { InputChangeContext, InputContext } from "../../context/inputContext";
import BaseInputComponent from "../input-component/baseInput";

const InputContextApiComponent = () => {
  const value = useContext(InputContext);
  const setValue = useContext(InputChangeContext);

  const ChangeValue = (e) => {
    debugger;
    setValue({
      ...value,
      text: e.target.value,
    });
  };

  return (
    <>
      <BaseInputComponent
        title=""
        name="inputContextApi"
        value={value?.text}
        change={ChangeValue}
      />
    </>
  );
};

export default InputContextApiComponent;
