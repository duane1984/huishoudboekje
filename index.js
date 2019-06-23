import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { HuishoudBoekje } from "./huishoudboekje";

function App() {
  return (
    <div className="App">
      <HuishoudBoekje />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
