import { OrderForm } from "./components/OrderForm";
import { PizzaCard } from "./components/PizzaCard";

export function App() {
  return (
    <main>
      <h1>Atomic Pizza</h1>

      <div className="menu-and-order">
        <section className="menu">
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
        </section>

        <section>
          <OrderForm />
        </section>
      </div>
    </main>
  );
}
