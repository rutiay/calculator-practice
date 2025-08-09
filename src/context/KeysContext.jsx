import { createContext, useState } from "react";

const KeysContext = createContext();

const KeysContextProvider = ({ children }) => {
  const [input, setInput] = useState("");

  const calculateResult = (a, b, op) => {
    let result;
    switch (op) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "÷":
        result = a / b;
        break;
      case "x":
        result = a * b;
        break;
      default:
        result = "Error";
        break;
    }
    return isNaN(result) ? "Error" : result;
  };

  return (
    <KeysContext.Provider value={{ input, setInput, calculateResult }}>
      {children}
    </KeysContext.Provider>
  );
};

export { KeysContext, KeysContextProvider };
