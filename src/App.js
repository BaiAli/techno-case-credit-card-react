import logo from "./logo.svg";
import "./App.css";

import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
      <Home/>
      </div>
    </BrowserRouter>
  );
}

export default App;
