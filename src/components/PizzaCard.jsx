export function PizzaCard({ name, ingredients, price }) {
  return (
    <article className="card">
      <h2>{name}</h2>
      <h3>Ingrédients</h3>

      <p>{ingredients}</p>
      <p className="price">{price}</p>
    </article>
  );
}
