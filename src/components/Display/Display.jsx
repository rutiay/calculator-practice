import { useContext } from "react";
import { KeysContext } from "../../context/KeysContext";
import "./Dispaly.css";

const Display = () => {
  const { input } = useContext(KeysContext);
  return (
    <div className="display">
      <span>{input}</span>
    </div>
  );
};

export default Display;
