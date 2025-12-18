import "../MainElement/MainElement.css";

import { useState } from "react";

export default function MainElement() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientItemList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((currentIngredients) => {
      return [...currentIngredients, newIngredient];
    });
    // console.log(newIngredient);
  }

  return (
    <main className="main">
      <form onClick={handleSubmit} className="form-container">
        <input
          type="text"
          aria-label="Add ingredients"
          name="ingredient"
          placeholder="e.g. oregano"
        />
        <button type="submit" className="button">
          + Add ingredient
        </button>
      </form>
      <ul>{ingredientItemList}</ul>
    </main>
  );
}
