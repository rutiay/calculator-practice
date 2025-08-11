import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Keys from "../../components/Keys/Keys";
import Display from "../../components/Display/Display";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import styles from './Calculator.module.css'

const Calculator = () => {

  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${styles.container}  ${theme === 'light' ? styles.light : styles.dark}`}>
      <ToggleSwitch />
        <Display />
        <Keys />
    </div>
  );
};

export default Calculator;
