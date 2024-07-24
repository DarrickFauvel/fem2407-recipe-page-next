import { ReactNode } from "react"

type RecipeTitleProps = {
  children: ReactNode
}

const RecipeTitle = ({ children }: RecipeTitleProps) => {
  return (
    <h2 className="font-young-serif text-4xl md:text-[40px] text-fem-stone-900 leading-none">
      {children}
    </h2>
  )
}
export default RecipeTitle
