import "../MainElement/MainElement.css";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

import React from "react";

export default function MainElement() {
  const [myFavoriteThings, setMyFavoriteThings] = React.useState([]);

  const allFavoriteThings = ["cats", "pizza", "coding", "movies", "nature"];

  const thingsElements = myFavoriteThings.map((thing) => {
    return <p key={thing}>{thing}</p>;
  });

  function addFavoriteThing() {
    setMyFavoriteThings((prevFavThings) => [...prevFavThings, "test"]);
  }
  // const ingredients = ["oregano", "chilli", "pasta"];

  // const ingredientItemList = ingredients.map((ingredient) => {
  //   return <li key={ingredient}>{ingredient}</li>;
  // });

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const newIngredient = formData.get("ingredient");
  //   // console.log(newIngredient);
  //   ingredients.push(newIngredient);
  //   console.log(ingredients);
  // }

  return (
    <main className="container">
      <button onClick={addFavoriteThing} aria-live="polite" className="value">
        Add item
      </button>

      <section aria-live="polite">{thingsElements}</section>
    </main>
    // <main className="main">
    //   <form onClick={handleSubmit} className="form-container">
    //     <input
    //       type="text"
    //       aria-label="Add ingredients"
    //       name="ingredient"
    //       placeholder="e.g. oregano"
    //     />
    //     <button type="submit" className="button">
    //       <Plus aria-hidden="true" size=".5rem" weight="bold" />
    //       Add ingredient
    //     </button>
    //   </form>
    //   <ul>{ingredientItemList}</ul>
    // </main>
  );
}
