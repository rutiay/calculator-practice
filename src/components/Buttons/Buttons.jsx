import { keysArray } from "../../utils/data";
import Button from "../Button/Button";
import styles from './Buttons.module.css';

const Buttons = () => {
  return (
    <div className={styles.keyboard}>
      {keysArray.map((key) => (
        <Button key={key} value={key} />
      ))}
    </div>
  );
};

export default Buttons;
