const RecipePreparation = () => {
  return (
    <div className="flex flex-col gap-4 bg-fem-rose-50 p-6 rounded-xl">
      <span className="text-fem-rose-800 text-xl font-semibold leading-none">
        Preparation time
      </span>
      <ul className="flex flex-col gap-2 pl-6 list-disc marker:text-xs">
        <li className="pl-4">
          <strong>Total:</strong> Approximately 10 minutes
        </li>
        <li className="pl-4">
          <strong>Preparation:</strong> 5 minutes
        </li>
        <li className="pl-4">
          <strong>Cooking:</strong> 5 minutes
        </li>
      </ul>
    </div>
  )
}
export default RecipePreparation
