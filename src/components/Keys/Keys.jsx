import { keysArray } from "../../utils/data";
import Key from "../Key/Key";
import "./Keys.css";

const Keys = () => {
  return (
    <div className="keyboard">
      {keysArray.map((key) => (
        <Key key={key} value={key} isEqual={key === "=" && "equal"} />
      ))}
    </div>
  );
};

export default Keys;
