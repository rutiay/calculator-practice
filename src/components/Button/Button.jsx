import { useContext } from "react";
import { KeysContext } from "../../context/KeysContext";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Button.module.css";
const Button = ({ value }) => {
  const { setInput, handleSpecialKeys, handleEquals } = useContext(KeysContext);
  const { theme } = useContext(ThemeContext);

  // const clickHandler = () => {
  //   if (value === "C") return setInput("");
  //   if (value === "x²") return setInput((prev) => Number(prev) ** 2);
  //   if (value === "²√x") return setInput((prev) => Math.sqrt(Number(prev)));
  //   if (value === "%") return setInput((prev) => Number(prev) / 100);
  //   setInput((prev) => {
  //     if (value !== "=") {
  //       return `${prev}${value}`;
  //     }
  //     const index = [...prev].findIndex(
  //       (num) => !/^(\d)*(\.)?([0-9]{1})?$/gm.test(num)
  //     );
  //     const num1 = prev.slice(0, index);
  //     const op = prev[index];
  //     const num2 = prev.slice(index + 1);
  //     console.log(num1, num2);

  //     return calculateResult(Number(num1), Number(num2), op);
  //   });
  // };

  const clickHandler = () => {
    if (handleSpecialKeys(value)) return;
    if (value === "=") return handleEquals();
    setInput((prev) => `${prev}${value}`);
  };

  return (
    <button type="button" onClick={clickHandler} className={`${styles.btn} ${styles[theme]}`}>
      {value}
    </button>
  );
};

export default Button;
