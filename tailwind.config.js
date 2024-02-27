/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-purple-start": "#A2A7F0",
        "blue-purple-end": "#696EDD",
        "blue-purple": "#6D72DE",
        gray: "#6E728E",
        "dark-gray": "#4A4D60",
      },
      width: {
        card: "21.875rem",
      },
      height: {
        "card-small": "28.3125rem",
        "card-large": "31.25rem",
      },
      borderRadius: {
        "card-small": "0.625rem 0rem 0rem 0.625rem",
        "card-large": "0.625rem",
      },
      padding: {
        "card-small": "1.94rem",
        "card-large": "3.41rem 1.94rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
    },
  },
  plugins: [],
};
