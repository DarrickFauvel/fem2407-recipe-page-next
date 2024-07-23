import RecipeTitleLevel2 from "../title-level2"

const RecipeInstructions = () => {
  return (
    <div className="flex flex-col gap-4">
      <RecipeTitleLevel2>Instructions</RecipeTitleLevel2>

      <ul className="flex flex-col gap-2 pl-6 list-decimal marker:font-bold marker:text-fem-brown-800">
        <li className="pl-4">
          <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch
          of salt and pepper until they are well mixed. You can add a tablespoon
          of water or milk for a fluffier texture.
        </li>
        <li className="pl-4">
          <strong>Heat the pan:</strong> Place a non-stick frying pan over
          medium heat and add butter or oil.
        </li>
        <li className="pl-4">
          <strong>Cook the omelette:</strong> Once the butter is melted and
          bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
          coat the surface.
        </li>
        <li className="pl-4">
          <strong>Add fillings (optional):</strong> When the eggs begin to set
          at the edges but are still slightly runny in the middle, sprinkle your
          chosen fillings over one half of the omelette.
        </li>
        <li className="pl-4">
          <strong>Fold and serve:</strong> As the omelette continues to cook,
          carefully lift one edge and fold it over the fillings. Let it cook for
          another minute, then slide it onto a plate.
        </li>
        <li className="pl-4">
          <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if
          needed.
        </li>
      </ul>
    </div>
  )
}
export default RecipeInstructions
