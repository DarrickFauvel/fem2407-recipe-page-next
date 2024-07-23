import RecipeImage from "./components/image"
import RecipeIngredients from "./components/ingredients"
import RecipeInstructions from "./components/instructions"
import RecipeNutrition from "./components/nutrition"
import RecipePreparation from "./components/preparation"
import RecipeTitle from "./components/title"

const Recipe = () => {
  return (
    <article className="group flex flex-col w-full max-w-[736px] bg-white sm:rounded-3xl">
      <div className="sm:px-10 sm:pt-10">
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

        <table>
          <tr className="border-t-0 border-r-0 border-l-0 border-b-[1px] border-b-fem-stone-150">
            <td className="pb-8">
              <RecipeIngredients />
            </td>
          </tr>
          <tr className="border-t-0 border-r-0 border-l-0 border-b-[1px]">
            <td className="py-8">
              <RecipeInstructions />
            </td>
          </tr>
          <tr>
            <td className="pt-8">
              <RecipeNutrition />
            </td>
          </tr>
        </table>
      </div>
    </article>
  )
}
export default Recipe
