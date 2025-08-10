import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./pages/Home";
import "./style.css";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Home />
    </div>
  );
};

export default App;
