const RecipeIngredients = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-fem-brown-800 text-3xl font-young-serif leading-none">
        Ingredients
      </h3>
      <ul className="flex flex-col gap-2 pl-6 list-disc marker:text-xs">
        <li className="pl-4">2-3 large eggs</li>
        <li className="pl-4">Salt, to taste</li>
        <li className="pl-4">Pepper, to taste</li>
        <li className="pl-4">1 tablespoon of butter or oil</li>
        <li className="pl-4">
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
    </div>
  )
}
export default RecipeIngredients
