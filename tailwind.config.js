/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      xs: "420px",
      // => @media (min-width: 420px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1800px",
      // => @media (min-width: 1536px) { ... }
      "4xl": "2100px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        bgPrimary: {
          DEFAULT: "#FFFFFF",
        },
        bgSecondary: {
          DEFAULT: "#F5F5F5",
        },
        bgColor3: {
          DEFAULT: "#3EBBA4",
        },
        bgColor4: {
          DEFAULT: "#F7F8FC",
        },
        bgColor5: {
          DEFAULT: "#FDFDFD",
        },
        bgColor6: {
          DEFAULT: "#C5FFF4",
        },
        textPrimary: {
          DEFAULT: "#001435",
        },
        textSecondary: {
          DEFAULT: "#B5B5B5",
        },
        textColor3: {
          DEFAULT: "#6B6B6B",
        },
        textColor4: {
          DEFAULT: "#3EBBA4",
        },
        textColor5: {
          DEFAULT: "#FFFFFF",
        },
        borderPrimary: {
          DEFAULT: "#3EBBA4",
        },
        borderSecondary: {
          DEFAULT: "#B5B5B5",
        },
        buttonPrimary: {
          DEFAULT: "#FFFFFF",
        },
        buttonSecondary: {
          DEFAULT: "#3EBBA4",
        },
        buttonColor3: {
          DEFAULT: "#E2E2E2",
        },
        buttonHover: {
          DEFAULT: "#3EBBA4",
        },
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
