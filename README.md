# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the page at any screen size

### Screenshot

mobile<br>
<img src="https://github.com/DarrickFauvel/fem2407-recipe-page-next/blob/main/screenshot-mobile.png?raw=true" width="200" />
<br>
tablet<br>
<img src="https://github.com/DarrickFauvel/fem2407-recipe-page-next/blob/main/screenshot-tablet.png?raw=true" width="300" />
<br>
desktop<br>
<img src="https://github.com/DarrickFauvel/fem2407-recipe-page-next/blob/main/screenshot-desktop.png?raw=true" width="400" />

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/recipe-page---tailwind-css-typescript-nextjs--TMBigTnNj](https://www.frontendmentor.io/solutions/recipe-page---tailwind-css-typescript-nextjs--TMBigTnNj)
- Live Site URL: [https://fem2407-recipe-page-next.vercel.app/](https://fem2407-recipe-page-next.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

I learned how to apply the projects design system into CSS custom properties and make them accessible via Tailwind CSS.

Here's an example:

```css
/* global.css */
:root {
  --color-fem-rose-800: #7a284e;
  --color-fem-rose-50: #fff7fb;
  --color-fem-stone-900: #312e2c;
  --color-fem-stone-600: #5f564d;
  --color-fem-stone-150: #e3ddd7;
  --color-fem-stone-100: #f3e5d7;
  --color-fem-brown-800: #854632;
}
```

```javascript
// tailwind.config.ts
const config: Config = {
  theme: {
    extend: {
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
}
```

This extends the CSS variables to the Tailwind autocomplete system. For example, the Rose 800 color is available via `text-fem-rose-800` and `bg-fem-rose-800`.

### Continued development

I may use a food API to render many reaL-world recipes.

### Useful resources

- [Tailwind CSS - Using CSS variables](https://tailwindcss.com/docs/customizing-colors#using-css-variables) - This helped me learn about using CSS variables with Tailwind.

## Author

- Frontend Mentor - [@DarrickFauvel](https://www.frontendmentor.io/profile/DarrickFauvel)
- LinkedIn - [Darrick Fauvel](https://www.linkedin.com/in/darrickfauvel/)
