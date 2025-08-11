import Calculator from './pages/Calculator/Calculator'
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./theme.css";

const App = () => {
const {theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Calculator/>
    </div>
  );
};

export default App;
