const RecipeNutrition = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-fem-brown-800 text-3xl font-young-serif leading-none">
        Nutrition
      </h3>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>
        <tbody>
          <tr className="border border-t-0 border-l-0 border-r-0 border-b-fem-stone-150">
            <th className="text-left py-3 font-normal pl-6" scope="row">
              Calories
            </th>
            <td className="font-bold text-fem-brown-800">277kcal</td>
          </tr>
          <tr className="border border-t-0 border-l-0 border-r-0 border-b-fem-stone-150">
            <th className="text-left py-3 font-normal pl-6" scope="row">
              Carbs
            </th>
            <td className="font-bold text-fem-brown-800">0g</td>
          </tr>
          <tr className="border border-t-0 border-l-0 border-r-0 border-b-fem-stone-150">
            <th className="text-left py-3 font-normal pl-6" scope="row">
              Protein
            </th>
            <td className="font-bold text-fem-brown-800">20g</td>
          </tr>
          <tr className="">
            <th className="text-left py-3 font-normal pl-6" scope="row">
              Fat
            </th>
            <td className="font-bold text-fem-brown-800">22g</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default RecipeNutrition
