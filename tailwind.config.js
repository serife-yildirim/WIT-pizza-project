/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'hero-pattern': "url('https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-1-images/home-banner.png?raw=true')",
      'pizza-image': "url('https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/cta/kart-1.png?raw=true')",
      'burger-image': "url('https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/cta/kart-2.png?raw=true')",
      'delivery-image': "url('https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/cta/kart-3.png?raw=true')",
      'terminal-pizza': "url('https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-1.png?raw=true')",
      'absolute-pizza': "url('https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-2.png?raw=true')",
      'useeffect-burger': "url('https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-3.png?raw=true')",
    }
  },
  plugins: [],
}