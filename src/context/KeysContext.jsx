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

  const handleSpecialKeys = (value) => {
  switch (value) {
    case "C": setInput(""); return true;
    case "x²": setInput(prev => Number(prev) ** 2); return true;
    case "²√x": setInput(prev => Math.sqrt(Number(prev))); return true;
    case "%": setInput(prev => Number(prev) / 100); return true;
    default: return false;
  }
};

const handleEquals = () => {
  setInput(prev => {
    const index = [...prev].findIndex(ch => !/^(\d)*(\.)?([0-9]{1})?$/.test(ch));
    const num1 = prev.slice(0, index);
    const op = prev[index];
    const num2 = prev.slice(index + 1);
    if (!num1 || !num2 || !op) return prev;
    return calculateResult(Number(num1), Number(num2), op);
  });
};

  return (
    <KeysContext.Provider value={{ input, setInput, handleSpecialKeys, handleEquals }}>
      {children}
    </KeysContext.Provider>
  );
};

export { KeysContext, KeysContextProvider };
