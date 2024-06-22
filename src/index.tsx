import React from "react";
import ReactDOM from "react-dom";
import KonvaCurve from "./components/test";

const App: React.FC = () => {
  return <KonvaCurve />;
};

ReactDOM.render(<App />, document.getElementById("root"));
