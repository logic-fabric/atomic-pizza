import { useState } from "react";

export function OrderForm() {
  const [pizzaName, setPizzaName] = useState("Margarita");
  const [pizzaSize, setPizzaSize] = useState("medium");

  return (
    <form>
      <label htmlFor="pizza-name">Choisir une pizza</label>

      <select
        name="pizza-name"
        value={pizzaName}
        defaultValue={pizzaName}
        onChange={(event) => setPizzaName(event.target.value)}
      >
        <option value="Margarita">Margarita</option>
        <option value="Regina">Regina</option>
        <option value="Hawaïenne">Hawaïenne</option>
      </select>

      <label htmlFor="pizza-size">Choisir sa taille</label>
      <div
        id="pizza-size"
        defaultValue={pizzaSize}
        onChange={(event) => setPizzaSize(event.target.value)}
      >
        <input
          id="pizza-sm"
          type="radio"
          name="pizza-size"
          value="small"
          checked={pizzaSize === "small"}
        />
        <label htmlFor="pizza-sm">Petite</label>

        <input
          id="pizza-md"
          type="radio"
          name="pizza-size"
          value="medium"
          checked={pizzaSize === "medium"}
        />
        <label htmlFor="pizza-md">Moyenne</label>

        <input
          id="pizza-lg"
          type="radio"
          name="pizza-size"
          value="large"
          checked={pizzaSize === "large"}
        />
        <label htmlFor="pizza-lg">Grande</label>
      </div>

      <button type="submit">Ajouter à ma commande</button>
    </form>
  );
}
