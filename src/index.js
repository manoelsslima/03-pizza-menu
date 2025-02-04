import React from "react";
import ReactDOM from "react-dom/client";

// components must start with uppercase
function App() {
  return <h1>Hello React!</h1>;
}
// root comes form the div's id in index.html file
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // React.StrictMode: render the components twice to find erros and check if we are using
  // outdated parts of the React API
);

// React before 18
// React.render(<App />);
