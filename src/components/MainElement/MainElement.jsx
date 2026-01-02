import "../MainElement/MainElement.css";

import { useState } from "react";

export default function MainElement() {
  const [ingredients, setIngredients] = useState([
    // "all the main spices",
    // "pasta",
    // "ground beef",
    // "tomato paste",
  ]);

  const [recipeShown, setRecipeShown] = useState(false);

  function toggleRecipeShown() {
    setRecipeShown((prevShown) => {
      return !prevShown;
    });
  }

  const ingredientItemList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((currentIngredients) => [
      ...currentIngredients,
      newIngredient,
    ]);
    // console.log(newIngredient);
  }

  return (
    <main className="main">
      <form action={handleSubmit} className="form-container">
        <input
          type="text"
          aria-label="Add ingredients"
          name="ingredient"
          placeholder="e.g. oregano"
        />
        <button className="button">Add ingredient</button>
      </form>
      <section className="ingredients-container">
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientItemList}
        </ul>
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe ?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={toggleRecipeShown}>Get a recipe</button>
        </div>
      </section>
    </main>
  );
}
