import { useContext } from "react";
import { KeysContext } from "../../context/KeysContext";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Dispaly.module.css";

const Display = () => {
  const { input } = useContext(KeysContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.display} ${
        theme === "light" ? styles.light : styles.dark
      }`}
    >
      <span>{input}</span>
    </div>
  );
};

export default Display;
