import { url } from 'inspector'
import type { Config } from 'tailwindcss'
import bg from "./public/Images/bg.png"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      colors: {
        "borderclr":"#89CFF0",
        "bgclr": "#FFFFFF",
        "sliderclr": "#89CFF0"



      },
    },
  },
  plugins: [],
}
export default config
