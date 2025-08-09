import { useContext } from "react";
import { KeysContext } from "../../context/KeysContext";
import "./Key.css";
const Key = ({ value, isEqual }) => {
  const { setInput, calculateResult } = useContext(KeysContext);

  const clickHandler = () => {
    if (value === "C") return setInput("");
    if (value === "x²") return setInput((prev) => Number(prev) ** 2);
    if (value === "²√x") return setInput((prev) => Math.sqrt(Number(prev)));
    if (value === "%") return setInput((prev) => Number(prev) / 100);
    setInput((prev) => {
      if (value !== "=") {
        return `${prev}${value}`;
      }
      const index = [...prev].findIndex(
        (num) => !/^(\d)*(\.)?([0-9]{1})?$/gm.test(num)
      );
      const num1 = prev.slice(0, index);
      const op = prev[index];
      const num2 = prev.slice(index + 1);
      console.log(num1, num2);

      return calculateResult(Number(num1), Number(num2), op);
    });
  };
  return (
    <button onClick={clickHandler} className={`btn ${isEqual}`}>
      {value}
    </button>
  );
};

export default Key;
