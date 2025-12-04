import "../MainElement/MainElement.css";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

import React from "react";

export default function MainElement() {
  const [isCount, setIsCount] = React.useState(0);

  function add() {
    setIsCount((prevCount) => prevCount + 1);
  }

  function minus() {
    if (isCount === 0) {
      isCount;
    } else {
      setIsCount((prevCount) => prevCount - 1);
    }
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
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button
          onClick={minus}
          aria-label="Decrease count"
          className="operator minus"
        >
          <Minus />
        </button>
        <h2 className="value">{isCount}</h2>
        <button
          onClick={add}
          aria-label="Increase count"
          className="operator plus"
        >
          <Plus />
        </button>
      </div>
    </main>
    // <main className="main">
    //   <form onClick={handleSubmit} className="form-container">
    //     <input
    //       type="text"
    //       aria-label="Add ingredients"
    //       placeholder="e.g. oregano"
    //       name="ingredient"
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
