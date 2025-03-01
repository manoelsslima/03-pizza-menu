import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// components must start with uppercase
// must return an markup, only one!
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// to write css, we need to enter in js mode. To do so, we use {}. The CSS properties
// are set using js objects, so we need another {}. The result is style={{cssProperty:value}}
// <h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}>Fast React Pizza Co.</h1>
function Header() {
  // const cssStyle = {color: "red", fontSize: "48px", textTransform: "uppercase"};
  const cssStyle = {};
  return (
    <header className="header">
      <h1 style={cssStyle}>Fast React Pizza Co.</h1>
    </header>
  );
}

// to pass numbers as props, we need to enter js mode
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* show pizzas only if there is at least one pizza.
      we need to compare with the length of the array because
      the <ul /> element would be rendered even though there is no
      pizzas in array, because an empty array is truthy. In order to
      avoid all that situation, we can use the ternary operator.
      We cannot use if/else statement because it doesn't produce a
      value so it's not allowed in javascript mode. */}
      {numPizzas > 0 ? (
        <>
          {/* React Fragment allow us to group withou leaving any trace in the DOM
          so we avoid using <div />. We can also use React.Fragment element
          with a property called key.*/}
          <p>
            Authentic Italian cousine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later. :)</p>
      )}
      {/* <Pizza
        name="Pizza salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms, onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

// using destructuring to avoid using props bolerplate
function Pizza({ pizzaObj }) {
  // It's possible rendering with multiple returns but it should be the
  // hole component or return null to avoid exhibit the component or
  // return another component.
  // if (pizzaObj.soldOut) return null;

  return (
    // using template literal to convert into javascript and use
    // ternary operator. To use js code inside template literal
    // we must use ${} e not only {}. We are going to use the
    // ternary operator to add conditionally a CSS class.
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // strict mode renders the components twice
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
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
// ReactDOM.render(<App />, document.getElementById("root"));
