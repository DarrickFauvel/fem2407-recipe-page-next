import { ReactNode } from "react"

type RecipeTitleProps = {
  children: ReactNode
}

const RecipeTitleLevel2 = ({ children }: RecipeTitleProps) => {
  return (
    <h3 className="text-fem-brown-800 text-[28px] font-young-serif leading-none">
      {children}
    </h3>
  )
}
export default RecipeTitleLevel2
