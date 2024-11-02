import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.tsx"
  
  ],
  theme: {
    colors: {
      
        'surface-background':'#171023',
        'primary-text':'#F5F6F6',
        'secondary-text': '#CDD0D4',
        'surface-primary': '#2C243B',
        'surface-secondary': '#413A4F',
        'surface-terciari': '#4E4563',
        'primary-color-500':'#8A42DB',
        'primary-color-400': '#9A5BE3',
        'secondary-color': '#7DFFAF'
    },
    fontFamily:{
      kalam: ['Kalam', 'sans-serif'],
      Heebo: ['Heebo', 'sans-serif'],
    }
  },
  plugins: [],
};
export default config;
