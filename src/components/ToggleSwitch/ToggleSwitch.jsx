import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./ToggleSwitch.module.css";

const ToggleSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <label className={styles.switch}>
      <input  onClick={toggleTheme}  type="checkbox" />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};
export default ToggleSwitch;
