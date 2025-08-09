import { KeysContextProvider } from "./context/KeysContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <KeysContextProvider>
      <Home />
    </KeysContextProvider>
  );
};

export default App;
