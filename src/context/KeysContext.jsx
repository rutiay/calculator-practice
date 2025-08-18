import { createContext, useState } from "react";

const KeysContext = createContext();

const KeysContextProvider = ({ children }) => {
  const [input, setInput] = useState("");

  const handleSpecialKeys = (value) => {
    switch (value) {
      case "C":
        setInput("");
        return true;
      case "x²":
        setInput((prev) => (prev ? String(Number(eval(prev)) ** 2) : ""));
        return true;
      case "²√x":
        setInput((prev) => (prev ? String(Math.sqrt(Number(eval(prev)))) : ""));
        return true;
      case "%":
        setInput((prev) => (prev ? String(Number(eval(prev)) / 100) : ""));
        return true;
      default:
        return false;
    }
  };

  const handleEquals = () => {
    setInput((prev) => {
      if (!prev) return "";

      try {
        const formattedInput = prev.replace(/x/g, "*").replace(/÷/g, "/");
        const result = Function(`return ${formattedInput}`)();
        return String(result);
      } catch (error) {
        console.error(error);

        return "Error";
      }
    });
  };

  return (
    <KeysContext.Provider
      value={{ input, setInput, handleSpecialKeys, handleEquals }}
    >
      {children}
    </KeysContext.Provider>
  );
};

export { KeysContext, KeysContextProvider };
