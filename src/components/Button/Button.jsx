import { useContext } from "react";
import { KeysContext } from "../../context/KeysContext";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Button.module.css";

const Button = ({ value }) => {
  const { input, setInput, handleSpecialKeys, handleEquals } =
    useContext(KeysContext);
  const { theme } = useContext(ThemeContext);

  const clickHandler = () => {
    if (handleSpecialKeys(value)) return;

    if (value === "=") return handleEquals();

    const operators = ["+", "-", "*", "/", "x", "÷"];
    const lastChar = input.slice(-1);

    if (operators.includes(value) && input === "") return;

    if (operators.includes(value) && operators.includes(lastChar)) {
      setInput(input.slice(0, -1) + value);
      return;
    }

    setInput(input + value);
  };

  return (
    <button
      type="button"
      onClick={clickHandler}
      className={`${styles.btn} ${styles[theme]}`}
    >
      {value}
    </button>
  );
};

export default Button;
