import Image from "next/image"

import recipeImage from "@/assets/images/image-omelette.jpeg"

const RecipeImage = () => {
  return <Image src={recipeImage} width={536} height={300} alt="recipe photo" />
}
export default RecipeImage
