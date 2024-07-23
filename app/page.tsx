import Image from "next/image"
import HiddenH1 from "./components/hidden-h1"
import Recipe from "./components/recipe"
import Attribution from "./components/attribution"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center sm:p-32 text-fem-stone-600">
      <HiddenH1 />
      <Recipe />
      <Attribution />
    </main>
  )
}
