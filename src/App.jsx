// eslint-disable-next-line no-unused-vars
import { PizzaCard } from "./components/PizzaCard";

export function App() {
  return (
    <>
      <h1>Welcome to Atomic Pizza</h1>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <PizzaCard
          name="Margarita"
          ingredients="Tomate, mozzarella, jambon, basilic"
          price="9,50 €"
        />
        <PizzaCard
          name="Regina"
          ingredients="Tomate, mozzarella, jambon, champignons, basilic"
          price="10,50 €"
        />
        <PizzaCard
          name="Hawaïenne"
          ingredients="Tomate, mozzarella, jambon, ananas, basilic"
          price="12,50 €"
        />
      </div>
    </>
  );
}
