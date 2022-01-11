import React, { createContext, useState } from "react";

const InputContext = createContext(undefined);
const InputChangeContext = createContext(undefined);

function InputProvider({ children }) {
  const [inputData, setInputData] = useState({
    text: "",
  });

  return (
    <InputContext.Provider value={inputData}>
      <InputChangeContext.Provider value={setInputData}>
        {children}
      </InputChangeContext.Provider>
    </InputContext.Provider>
  );
}

export { InputProvider, InputContext, InputChangeContext };
