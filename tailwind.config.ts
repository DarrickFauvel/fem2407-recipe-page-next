import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ["young-serif"]: ["var(--font-young-serif)"],
        outfit: ["var(--font-outfit)"],
      },
      colors: {
        ["fem-rose-800"]: "var(--color-fem-rose-800)",
        ["fem-rose-50"]: "var(--color-fem-rose-50)",
        ["fem-stone-900"]: "var(--color-fem-stone-900)",
        ["fem-stone-600"]: "var(--color-fem-stone-600)",
        ["fem-stone-150"]: "var(--color-fem-stone-150)",
        ["fem-stone-100"]: "var(--color-fem-stone-100)",
        ["fem-brown-800"]: "var(--color-fem-brown-800)",
      },
    },
  },
  plugins: [],
}
export default config
