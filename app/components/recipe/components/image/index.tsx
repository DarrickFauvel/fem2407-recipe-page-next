import Image from "next/image"

import recipeImage from "@/assets/images/image-omelette.jpeg"

const RecipeImage = () => {
  return (
    <div className="relative overflow-hidden sm:rounded-xl">
      <Image
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
        src={recipeImage}
        width={536}
        height={300}
        alt="recipe photo"
      />
    </div>
  )
}
export default RecipeImage
