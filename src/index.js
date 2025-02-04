import React from "react";
import ReactDOM from "react-dom/client";

// components must start with uppercase
function App() {
  return <h1>Hello React!</h1>;
}
// root comes form the div's id in index.html file
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// React before 18
// React.render(<App />);
