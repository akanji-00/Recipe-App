import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    e.target.reset();
  }

  return (
    <main className="main container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="ingredient"
          className="form-input"
          placeholder="e.g oregano"
        />
        <button className="form-button">Add Ingredient</button>
      </form>

      <section className="ingredient-container">
        <h1>Ingredients on hand:</h1>
        <ul className="ingredient-list">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="ingredient-list-item">
              {ingredient}
            </li>
          ))}
        </ul>
      </section>

      <section className="recipe-cta">
        <div className="cta-text">
          <h2>Ready for a recipe?</h2>
          <p>Generate a recipe from your list of ingredients</p>
        </div>

        <a className="cta-button">Get a recipe</a>
      </section>

      <section className="recipe-container">
        <h2>Suggested recipe:</h2>
        <p>Dummy text</p>
      </section>
    </main>
  );
}
