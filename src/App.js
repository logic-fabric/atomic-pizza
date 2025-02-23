function PizzaCard(props) {
  return React.createElement("article", { class: "card" }, [
    React.createElement("h2", null, props.name),
    React.createElement("h3", null, "Ingrédients"),
    React.createElement("p", null, props.ingredients),
    React.createElement("p", { class: "price" }, props.price),
  ]);
}

function App() {
  return React.createElement(React.Fragment, null, [
    React.createElement("h1", null, "Welcome to Atomic Pizza"),
    React.createElement(
      "div",
      {
        style: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
      },
      [
        React.createElement(PizzaCard, {
          name: "Margarita",
          ingredients: "Tomate, mozzarella, jambon, basilic",
          price: "9,50 €",
        }),

        React.createElement(PizzaCard, {
          name: "Regina",
          ingredients: "Tomate, mozzarella, jambon, champignons, basilic",
          price: "10,50 €",
        }),
        React.createElement(PizzaCard, {
          name: "Hawaïenne",
          ingredients: "Tomate, mozzarella, jambon, ananas, basilic",
          price: "12,50 €",
        }),
      ],
    ),
  ]);
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
