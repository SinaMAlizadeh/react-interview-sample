import "./App.css";
import MultiInput from "./components/input-component/multi-input";
import InputContextApiComponent from "./components/input-context/InputContextApi";
import InputUsageComponent from "./components/input-context/inputUsageComponent";
import InputComponent from "./components/input/input";
import { InputProvider } from "./context/inputContext";

function App() {
  return (
    <div className="App">
      {/* simple textbox */}
      {/* <InputComponent /> */}

      {/* simple textbox */}
      {/* <MultiInput /> */}

      {/* Context With Input */}
      <InputProvider>
        <InputUsageComponent />
        <InputContextApiComponent />
      </InputProvider>
    </div>
  );
}

export default App;
