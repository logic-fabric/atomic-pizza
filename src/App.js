import { createElement, Fragment } from "react";
import { createRoot } from "react-dom/client";

function PizzaCard(props) {
  return createElement("article", { className: "card" }, [
    createElement("h2", null, props.name),
    createElement("h3", null, "Ingrédients"),
    createElement("p", null, props.ingredients),
    createElement("p", { className: "price" }, props.price),
  ]);
}

function App() {
  return createElement(Fragment, null, [
    createElement("h1", null, "Welcome to Atomic Pizza"),
    createElement(
      "div",
      {
        style: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
      },
      [
        createElement(PizzaCard, {
          name: "Margarita",
          ingredients: "Tomate, mozzarella, jambon, basilic",
          price: "9,50 €",
        }),

        createElement(PizzaCard, {
          name: "Regina",
          ingredients: "Tomate, mozzarella, jambon, champignons, basilic",
          price: "10,50 €",
        }),
        createElement(PizzaCard, {
          name: "Hawaïenne",
          ingredients: "Tomate, mozzarella, jambon, ananas, basilic",
          price: "12,50 €",
        }),
      ],
    ),
  ]);
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(createElement(App));
