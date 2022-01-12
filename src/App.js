import { Link, Outlet } from "react-router-dom";
import "./App.css";
import UseHttpCustomHook from "./components/customeHook/useHttpCustomHook";
import HttpRequestComponent from "./components/httpRequest/httpRequest";
import MultiInput from "./components/input-component/multi-input";
import InputContextApiComponent from "./components/input-context/InputContextApi";
import InputUsageComponent from "./components/input-context/inputUsageComponent";
import InputComponent from "./components/input/input";
import { InputProvider } from "./context/inputContext";

function App() {
  return (
    <div className="App">
      <Link to="about">About</Link>
      <Link to="/">Home</Link>
      <Link to="students">student</Link>
      <Link to="students/list">student list</Link>
      <Link to="students/123">student add</Link>

      <Outlet />
      {/* simple textbox */}
      {/* <InputComponent /> */}

      {/* simple textbox */}
      {/* <MultiInput /> */}

      {/* Context With Input */}
      {/* <InputProvider>
        <InputUsageComponent />
        <InputContextApiComponent />
      </InputProvider> */}

      {/* HttpRequest */}
      {/* <HttpRequestComponent /> */}

      {/*custome hook*/}
      {/* <UseHttpCustomHook /> */}
    </div>
  );
}

export default App;
