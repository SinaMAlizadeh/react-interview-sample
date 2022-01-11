import React, { useContext } from "react";
import { InputContext } from "../../context/inputContext";

const InputUsageComponent = () => {
  const value = useContext(InputContext);

  return (
    <div>
      <b>Another Partial :</b>
      {value.text}
    </div>
  );
};

export default InputUsageComponent;
