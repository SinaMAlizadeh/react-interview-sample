import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/RouterTest/home";
import About from "./components/RouterTest/about";
import Student from "./components/RouterTest/student";
import StudentAdd from "./components/RouterTest/studentAdd";
import StudentList from "./components/RouterTest/studentList";
import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="students" element={<Student />}>
              <Route index element={<StudentList />} />
              <Route path=":id" element={<StudentAdd />} />
            </Route>
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
