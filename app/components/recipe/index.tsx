import RecipeImage from "./components/image"
import RecipeIngredients from "./components/ingredients"
import RecipeInstructions from "./components/instructions"
import RecipeNutrition from "./components/nutrition"
import RecipePreparation from "./components/preparation"
import RecipeTitle from "./components/title"

const Recipe = () => {
  return (
    <article className="flex flex-col w-full bg-white sm:rounded-3xl">
      <div className="">
        <RecipeImage />
      </div>
      <div className="flex flex-col gap-8 px-8 py-10">
        <div className="flex flex-col gap-6">
          <RecipeTitle>Simple Omelette Recipe</RecipeTitle>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>

        <RecipePreparation />
        <RecipeIngredients />
        <RecipeInstructions />
        <RecipeNutrition />
      </div>
    </article>
  )
}
export default Recipe
